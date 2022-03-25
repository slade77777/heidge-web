const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'res.cloudinary.com']
  }
});
