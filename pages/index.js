import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';

export default () => (
  <Layout>
    <Hero />
  </Layout>
);

//{"src":"package.json","use":"@now/static-build"}
/*
{
  "private": true,
  "scripts": {
    "dev": "next",
    "now-build": "next build && next export -o dist",
    "now-dev": "next -p $PORT"
  },
  "dependencies": {
    "bootstrap": "^4.3.1",
    "classnames": "^2.2.6",
    "next": "latest",
    "popper.js": "^1.15.0",
    "react": "latest",
    "react-dom": "latest",
    "reactstrap": "^8.0.0"
  },
  "devDependencies": {
    "@zeit/next-sass": "^1.0.1",
    "node-sass": "^4.12.0"
  }
}
*/