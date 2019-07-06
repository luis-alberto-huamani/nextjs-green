import Head from 'next/head';
import Layout from '../components/layout/layout';
import Perfil from '../components/perfil/perfil';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const App = ({ user }) => (
  <div>
    <Head>
    </Head>
    <Layout>
      {console.log(user)}
      <Perfil user={user} />
    </Layout>
  </div>
);

App.getInitialProps = async ({ query }) => {
  const { id }  = query;
  const res = await fetch(`https://nextjs-green.ftandcompany.now.sh/api/perfil?id=${id}`);
  const user = await res.json();
  console.log(user);
  return { user };
};

export default App;


/*App.getInitialProps = async ({ query }) => {
  const id = query.id;
  const data = {
    reqid: id,
  }
  const res = await fetch("http://localhost:3000/api/perfil",{
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  const user = await res.json();
  return { user, id };
};*/