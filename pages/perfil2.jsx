import fetch from 'isomorphic-unfetch';
const Perfil = ({ user }) => (
  <div>
    <h1>hola</h1>
    {console.log(user)}
  </div>
);

Perfil.getInitialProps = async ({ query }) => {
  const { id }  = query;
  const res = await fetch(`http://localhost:4000/api/perfil/${id}`);
  const user = await res.json();
  return { user };
};

export default Perfil;