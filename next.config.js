const withSass = require("@zeit/next-sass");
module.exports = withSass({
  target: "serverless",
  webpack(config, options) {
    // Further custom configuration here
    config.resolve = {
      // custom stuff
      ...config.resolve // spread ehre
    };
    return config;
  }
});

//{"src":"package.json","use":"@now/static-build"},
/*    "now-build": "next build && next export -o dist",
    "now-dev": "next -p $PORT"*/
