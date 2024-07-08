// components/Login.tsx

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/services/apiServices';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft } from 'lucide-react';

// Login component definition
export default function Login() {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error message
  const { setAuthenticated } = useAuth(); // useAuth hook to get setAuthenticated function
  const router = useRouter(); // useRouter hook from Next.js for navigation

  // Handle form submission for login
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    try {
      const { token } = await login(email, password); // Call login function from apiServices
      localStorage.setItem('token', token); // Store the token in localStorage
      setAuthenticated(true); // Set authenticated state to true
      router.push('/mailing'); // Redirect to mailing page
    } catch (error: any) {
      setError(error.message); // Set error message if login fails
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Link href="/" prefetch={false}>
          <ArrowLeft className="h-10 w-10 hover:text-primary" /> {/* Back arrow link */}
        </Link>
      </div>
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Link href="#" prefetch={false}>
            <MountainIcon className="h-8 w-8" /> {/* Custom logo */}
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <Card>
          <form onSubmit={handleLogin}>
            <CardHeader>
              <CardTitle className="text-2xl">Sign in to your account</CardTitle>
              <CardDescription>
                Enter your email and password below to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-destructive">{error}</p>} {/* Display error message if any */}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

// Custom MountainIcon component
function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
