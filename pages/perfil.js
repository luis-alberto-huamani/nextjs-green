import Layout from '../components/layout/layout';
import Perfil from '../components/perfil/perfil';
import fetch from 'isomorphic-unfetch';

const App = ({ user }) => (
  <div>
    <Layout>
      <Perfil user={user} />
    </Layout>
  </div>
);

App.getInitialProps = async ({ query }) => {
  const { id }  = query;
  const res = await fetch(`http://green.etii5dypfm.us-east-2.elasticbeanstalk.com/api/perfil.js?id=${id}`);//fetch(`https://nextjs-green.now.sh/api/perfil.js?id=${id}`);
  const user = await res.json();
  return { user };
};

export default App;

