/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/200',
            }
        ]
    }

};

export default nextConfig;
