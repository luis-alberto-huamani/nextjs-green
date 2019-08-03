import React, { Component } from 'react';
import './add-post.scss';
import { Modal, Button } from 'reactstrap';
import Upload from '../perf/btn-upload';
import uuid from 'uuid/v1';

const store = [
  {
    id: '1234561',
    url:'/product/123456',
    name: 'Oreo',
    price: '1 gc',
  },
  {
    id: '1234562',
    url:'/product/123456',
    name: 'Cramel',
    price: '1 gc',
  },
  {
    id: '1234563',
    url:'/product/123456',
    name: 'Samba',
    price: '1 gc',
  },
  {
    id: '1234564',
    url:'/product/123456',
    name: 'Fanta',
    price: '1 gc',
  },
  {
    id: '1234565',
    url:'/product/123456',
    name: 'Chicletts',
    price: '1 gc',
  },
  {
    id: '1234566',
    url:'/product/123456',
    name: 'Netflix',
    price: '1 gc',
  }
];

const user = {
  id: '456789321',
  name: 'felix',
  lastName: 'tineo',
  perfilImg: '/static/felix.jpg',
  url: '/perfil/789654321',
}

class NewPost{
  constructor({
    author,
    authorImg,
    authorUrl,
    postTitle,
    postDate,
    postImg,
    postInfo,
    wishes,
  }){
    this.author = author;
    this.authorImg = authorImg;
    this.authorName = authorName;
    this.authorUrl = authorUrl;
    this.postTitle = postTitle;
    this.postDate = postDate;
    this.postImg = postImg;
    this.postInfo =  postInfo;
    this.wishes = wishes;
  }
};

const Add = ({
  handleChange,
  suggest,
  onSuggest,
  onWishes,
  wishes,
  handleChangeImg,
  onCancel,
  values,
}) => (
  <div>
      <div className="addPost_main_cont shadow">
        <header className="addPost">
          <input
            type="text"
            id="postTitle"
            value={values.postTitle}
            placeholder="Titulo"
            onChange={handleChange}
          />
          <Upload
            id="postImg"
            title="Imagen"
            onChange={handleChangeImg}
          />
        </header>
        <div className="addPost_body">
          <div className="post_img_cont">
            <img src={values.postImg} alt=""/>
          </div>
          <textarea
            name=""
            id="postInfo"
            value={values.postInfo}
            onChange={handleChange}
          />
          <div className="wish_cont row">
            <div className="col-6">
              <div className="suggest_cont">
                <input
                  type="text"
                  id="whish"
                  value={values.wish}
                  placeholder="Elige tus deseos"
                  onChange={onSuggest}
                />
                <ul className="suggest_list">
                  {
                    suggest.map(item => <li key={uuid()}><button onClick={onWishes} id={item.id}>{item.name}</button></li>)
                  }
                </ul>
              </div>
            </div>
            <div className="col-6">
              <ul className="wishes_cont">
                {
                  wishes.map(item => <li key={uuid()}><button id={item.id} title="Eliminar">{item.name}</button></li>)
                }
              </ul>
            </div>
          </div>
        </div>
        <footer className="addPost">
          <Button onClick={onCancel} size="sm" color="secondary">Cancelar</Button>
          <Button size="sm" color="success">Crear</Button>
        </footer>
      </div>
  </div>
);

class AddPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      store: store,
      wish: '',
      postTitle: '',
      postInfo: '',
      postImg: '',
      storeSuggest: [],
      wishes: [],
      postImg: null,
      post: [
        {
          id: '123456789',
          authorImg: '/statuc/friend-4.jpg',
          authorName: 'thera fire',
          url: '/perfil/123456789',
          postImg: '/static/star.jpg',
          postTitle: 'Felicidades!!',
          postInfo: 'Felicito a mi hermosa amiga por ser la estrella de greenlink',
          whishes: [store[0], store[1], store[2]],
          comments:[
            {
              authorName: 'felix',
              authorUrl: '/perfil/12458752',
              commet:'es hermosa, felicidades',
            }
          ],
          likes:5,
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSuggest = this.onSuggest.bind(this);
    this.onWishes = this.onWishes.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAddPost = this.onAddPost.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.id]: e.target.value });
  }

  onSuggest(e){
    const { store, wish } = this.state;
    const input = e.target.value;
    this.setState({ wish: e.target.value })
    if(input) {
      const suggest = store.filter(item => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1);
      console.log(suggest);
      this.setState({ storeSuggest: suggest });
    } else {
      this.setState({ storeSuggest: [] });
    }
  }

  onWishes(e){
    const { store, wishes } = this.state;
    const productId = e.target.id;
    const product = store.find(product => product.id === productId );
    if(wishes.find(item => item === product )) {
      this.setState({ wish: '', storeSuggest: [] });
    } else {
      this.setState({ wishes: [...wishes, product], wish: '', storeSuggest: [] });
    }
  }

  handleChangeImg(e){
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend= () => {
      if(reader.result) {
        this.setState({ postImg: reader.result });
      } else {
        this.setState({ postImg: null });
      }
    }
    reader.readAsDataURL(img);
  }

  onCancel() {
    this.setState({
      postTitle: '',
      postImg: null,
      postInfo: '',
      wishes: [],
    })
  };
  
  onAddPost(){
    const { postTitle, postImg, wishes, }
    const newPost = {
      author: `${user.name} ${user.lastName}`,
      authorImg: user.perfilImg,
      authorUrl: user.url,
      postTitle:
    };
    author,
    authorImg,
    authorUrl,
    postTitle,
    postDate,
    postImg,
    postInfo,
    wishes,
  }

  render() {
    const {
      storeSuggest,
      wish,
      wishes,
      postTitle,
      postInfo,
      postImg,
    } = this.state;
    return(
      <div>
        <Add
          visible={this.props.visible}
          suggest={storeSuggest}
          wishes={wishes}
          handleChange={this.handleChange}
          onSuggest={this.onSuggest}
          onWishes = {this.onWishes}
          handleChangeImg={this.handleChangeImg}
          onCancel={this.onCancel}
          values={{
            wish,
            postTitle,
            postInfo,
            postImg,
            postImg
          }}
        />
      </div>
    );
  }
}

export default AddPost;
