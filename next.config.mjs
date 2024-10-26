/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/intake',
                destination: 'https://form.jotform.com/242945872522059',
                permanent: false,
            }
        ]
    }
};

export default nextConfig;
