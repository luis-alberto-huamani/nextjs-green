import './friends.scss';


const Person = ({ perfilImg, name, lastName, frontPageQuote, remove, add }) => (
  <div className="person_cont">
    <div className="person_header">
      <button onClick={remove} title="Eliminar">X</button>
    </div>
    <div className="person_info">
      <img src={perfilImg} className="img-fluid" alt={name}/>
      <div className="person_description">
        <p>{name}{" "}{lastName}</p>
        <p>{frontPageQuote}</p>
      </div>
    </div>
    <div className="person_footer">
      <button onClick={add}>Agregar</button>
    </div>
  </div>
);


const Friends = ({ users }) => (
  <section className="friends_main_cont">
    {
      users.map(user => (
        <Person 
        name={user.name}
        lastName={user.lastName}
        perfilImg={user.perfilImg}
        frontPageQuote={user.frontPageQuote}
      />
      ))
    }
  </section>
);

export default Friends;