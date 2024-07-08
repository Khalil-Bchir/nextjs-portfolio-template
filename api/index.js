require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const INIT_EMAIL = process.env.INITIAL_USERNAME;
const INIT_PASSWORD = process.env.INITIAL_PASSWORD;

app.use(cors());
app.use(bodyParser.json());

// Mongoose models
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const formSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
const Form = mongoose.model('Form', formSchema);

mongoose.connect(DATABASE_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('connection error:', error);
  });

// Middleware to check token and protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Route to login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// CRUD operations for the form data
app.post('/api/messages', async (req, res) => {
  const { email,name, subject, message } = req.body;
  if (!email || !subject || !message || !name) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const form = new Form({ email,name,  subject, message });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.get('/api/messages', authenticateToken,  async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Create a user if not already exists on server start
const createDefaultUser = async () => {
  const email = INIT_EMAIL;
  const password = INIT_PASSWORD;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        password: await bcrypt.hash(password, 10),
      });
      await user.save();
      console.log('Default admin user created');
    } else {
      console.log('User already exists');
    }
  } catch (error) {
    console.error('Error creating default user:', error);
  }
};

createDefaultUser();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
