/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/CV',
    trailingSlash: true,
};

module.exports = nextConfig;
