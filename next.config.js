/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  env: {
    mongodb_username: "tobi123",
    mongodb_password: "WhTAyo2vJjU2MHaY",
    mongodb_clustername: "cluster0",
    mongodb_database: "teecommerce",
  },
};
