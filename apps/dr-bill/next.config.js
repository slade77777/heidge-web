const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path:'https://res.cloudinary.com/suborg/',
    formats: ['image/avif', 'image/webp']
  }
});
