// next.config.mjs
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const nextConfig = {
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
    },
};

export default nextConfig;
