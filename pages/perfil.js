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
  const res = fetch(`https://nextjs-green.ftandcompany.now.sh/api/perfil.js?id=${id}`);
  const user = await res.json();
  console.log(`initial props ${user}`);
  return { user };
};

export default App;
