const nextTranslate = require('next-translate');


module.exports = nextTranslate({
  // images: {
  //   domains: ["courses-top.ru"],
  // },

  webpack(config) {

    config.module.rules.push({
      loader: "@svgr/webpack",
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  images: {
    domains: ['picsum.photos'],
  },

});
