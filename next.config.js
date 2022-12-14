/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_URL: 'http://localhost:8000/api/v1',
        ASSETS_URL: 'http://localhost:8000/',
    }
}

module.exports = nextConfig
