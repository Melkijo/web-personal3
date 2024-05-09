/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.coursera.org',
                port: '',
                pathname: '/account/**',
            },
        ],
    },
};

export default nextConfig;
