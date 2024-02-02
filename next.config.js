/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    images: { formats: ['image/avif', 'image/webp'] },
};

module.exports = nextConfig;
