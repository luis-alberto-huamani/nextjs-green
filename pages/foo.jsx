import React, { Component } from 'react';
import './foo.scss';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Upload from '../components/perf/btn-upload';

const myUsers = [
  {
    id: '1234561',
    url:'/kadkans',
    fullName: 'jhon doe',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    id: '1234562',
    url:'/kadkans',
    fullName: 'sacha gray',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    id: '1234563',
    url:'/kadkans',
    fullName: 'rachel star',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  }
];

const  person = {
  id:'12345678910',
  mail: 'person4@mail.com',
  pass: '123456',
  name: 'thera',
  lastName: 'earth',
  fullName: 'thera earth',
  birthday: '13/07/2019',
  history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis! Officiis distinctio in aliquid, deleniti facilis hic animi incidunt ab nulla soluta et unde accusantium expedita sed debitis impedit est!',
  interest: 'Lorem ipsum dolor sit amet consectetur',
  perfilImg: '/static/friend-4.jpg',
  frontPageImg: '/static/hero-0.jpg',
  frontPageQuote:'-La conservación es un estado de armonía entre hombre y tierra.-Aldo Leopold.',
  wallet: 500,
  posts: [],
  friends: [],
  friendReq: [],
  gifts: 10,
  comments: [],
};

const AddPost = ({ visible, onClose }) => (
  <div className="addPost_main_cont">
    <Modal isOpen={visible}>
      <div className="addPost_main_cont">
        <header className="addPost">
          <input placeholder="Titulo" type="text"/>
          <Upload />
        </header>
        <div className="addPost_body">
          <textarea name="" id="" />
        </div>
        <footer className="addPost">
          <Button onClick={onClose} size="sm" color="secondary">Cancelar</Button>
          <Button size="sm" color="success">Crear</Button>
        </footer>
      </div>
    </Modal>
  </div>
);

class Foo extends Component{
  constructor(props){
    super(props);
    this.state = {
      addPostVisible: true,
    };
    this.onAddPost = this.onAddPost.bind(this);
  }

  onAddPost() {
    const { addPostVisible } = this.state;
    this.setState({ addPostVisible: !addPostVisible });
  }

  render() {
    const {
      addPostVisible,
    } = this.state;
    return(
      <div className="foo_cont container-fluid">
        <button onClick={this.onAddPost}>Crear Post</button>
        <AddPost
          visible={addPostVisible}
          onClose={this.onAddPost}
        />
      </div>
    );
  }
}

export default Foo;
