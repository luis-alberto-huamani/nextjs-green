import './friends.scss';


const Person = ({ id,  perfilImg, name, url, frontPageQuote, onClick}) => (
  <div className="person_cont">
    <div className="person_header">
      <button id={id} onClick={()=>onClick('rm', id)} title="Eliminar">X</button>
    </div>
    <div className="person_info">
      <img src={perfilImg} className="img-fluid" alt={name}/>
      <div className="person_description">
        <a href={url}>{name}</a>
        <p>{frontPageQuote}</p>
      </div>
    </div>
    <div className="person_footer">
      <button onClick={()=>onClick('add', id)}>Agregar</button>
    </div>
  </div>
);


const Friends = ({ users, onClick }) => (
  <section className="friends_main_cont">
    {
      users.map(user => (
        <Person 
        id={user.id}
        onClick={onClick}
        name={user.fullName}
        url={user.url}
        perfilImg={user.perfilImg}
        frontPageQuote={user.frontPageQuote}
      />
      ))
    }
  </section>
);

export default Friends;
