const withSass = require("@zeit/next-sass");
module.exports = withSass({
  target: "serverless"
});

//{"src":"package.json","use":"@now/static-build"},
/*    "now-build": "next build && next export -o dist",
    "now-dev": "next -p $PORT"*/
