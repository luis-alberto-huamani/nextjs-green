import Layout from '../components/layout/layout';
import Perfil from '../components/perfil/perfil';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

const App = ({ user, userStore }) => (
  <div>
    <Layout>
      {console.log(userStore)}
      <Perfil user={user} />
    </Layout>
  </div>
);

App.getInitialProps = async ({ query }) => {
  const { id }  = query;
  //const res = await fetch(`https://nextjs-green.now.sh/api/perfil.js?id=${id}`);
  const res = await fetch(`http://localhost:4000/api/perfil?id=${id}`);
  const user = await res.json();
  return { user };
};

const mapStateToProps = state => ({ userStore: state.user });

export default connect(mapStateToProps)(App);

