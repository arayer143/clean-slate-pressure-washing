/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    },
  }
  
  module.exports = nextConfig