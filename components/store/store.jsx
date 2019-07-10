import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onStore, storeSections } from '../../store/actions';
import { Modal } from 'reactstrap';
import classnames from 'classnames';
import './store.scss';

const CategoryButton = ({ name, width, height, img, id, handleBlur, blur, onClick }) => (
  <div
    className="category_cont"
    style={{
      width: width,
      height: height,
    }}
  >
    <div className={classnames({
      category: true,
      blur: !blur
    })} 
      style={{
        background: `url("${img}") top center no-repeat`,
        backgroundSize: 'cover',
      }}
    />
    <button onClick={onClick} id={id} onMouseOver={handleBlur} onMouseLeave={handleBlur}>{name}</button>
  </div>
)

class Store extends Component{
  constructor(props) {
    super(props);
    this.state = {
      musicaState: false,
      candyState: false,
      bisState: false,
      toyState: false,
      ebookState: false,
      tvState: false,
      productCurrent:{
        id: 'uuid()',
        tag: 'musica',
        name: 'item-1',
        url: '/static/musica/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
      },
    }
    this.onBlurImg = this.onBlurImg.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  componentDidMount() {
    const { store } = this.props;
  }

  onBlurImg(e) {
    const element = e.target.id;
    this.setState({ [element]: !this.state[element] });
  }
  handleProduct(item) {
    const { onStore } = this.props;
    onStore(storeSections.PRODUCT_INFO);
    this.setState({ productCurrent: item });
  }

  render() {
    const {
      visible,
      home,
      productInfo,
      musica,
      bisuteria,
      juguete,
      golosina,
      ebook,
      tv,
    } = this.props.store;
    const { onStore } = this.props;
    const {
      musicaState,
      candyState,
      bisState,
      toyState,
      ebookState,
      tvState,
      productCurrent,
    } = this.state;
    return(
      <div>
        <Modal className="my_modal" isOpen={visible}>
          <section className="store_main_cont">
            <header className="store_header">
              <nav className="main_store_nav">
                <button onClick={()=>onStore(storeSections.HOME)} className="store_home">Inicio</button>
                <button className="store_search">Buscar</button>
                <div className="store_search_bar">
                </div>
              </nav>
              <button onClick={() => onStore(storeSections.OPEN_STORE)} className="store_close">X</button>
            </header>
            <div className="store_body container-fluid">
              {
                home && (
                  <div className="row">
                  <div className="col-4">
                    <CategoryButton
                      width= "100%"
                      height="500px"
                      img="/static/musica-2.jpg"
                      name="Musica"
                      id="musicaState"
                      handleBlur={this.onBlurImg}
                      blur={musicaState}
                      onClick={()=>onStore(storeSections.MUSICA)}
                    />
                  </div>
                  <div className="col-8">
                    <CategoryButton 
                      width="100%"
                      height="30%"
                      img="/static/candy-6.jpg"
                      name="Golosinas"
                      id="candyState"
                      handleBlur={this.onBlurImg}
                      blur={candyState}
                      onClick={()=>onStore(storeSections.GOLOSINA)}
                    />
                    <div className="four_cont">
                      <CategoryButton
                        width="50%"
                        height="100%"
                        img="/static/jewel.jpg"
                        name="Bisuteria"
                        id="bisState"
                        handleBlur={this.onBlurImg}
                        blur={bisState}
                        onClick={()=>onStore(storeSections.BISUTERIA)}
                      />
                      <CategoryButton
                        width="50%"
                        height="100%"
                        img="/static/toys.jpg"
                        name="Juguetes"
                        id="toyState"
                        handleBlur={this.onBlurImg}
                        blur={toyState}
                        onClick={()=>onStore(storeSections.JUGUETE)}
                      />
                    </div>
                    <div className="four_cont">
                      <CategoryButton
                        width="50%"
                        height="100%"
                        img="/static/ebook-2.jpg"
                        name="Ebooks"
                        id="ebookState"
                        handleBlur={this.onBlurImg}
                        blur={ebookState}
                        onClick={()=>onStore(storeSections.EBOOK)}
                      />
                      <CategoryButton
                        width="50%"
                        height="100%"
                        img="/static/tv.jpg"
                        name="Tv's"
                        id="tvState"
                        handleBlur={this.onBlurImg}
                        blur={tvState}
                        onClick={()=>onStore(storeSections.TV)}
                      />
                    </div>
                  </div>
                </div>
                )
              }
              {
                productInfo && (
                  <div className="product_current_cont container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <img className="img-fluid" src={productCurrent.url} alt=""/>
                      </div>
                      <div className="col-6">
                        <div className="product_description">
                          <h2>{productCurrent.name}</h2>
                          <p>{productCurrent.description}</p>
                          <div className="product_footer">
                            <p>{productCurrent.price}</p>
                            <button>Comprar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                musica.visible && (
                  <div className="products_cont">
                    {
                      musica.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                golosina.visible && (
                  <div className="products_cont">
                    {
                      golosina.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                bisuteria.visible && (
                  <div className="products_cont">
                    {
                      bisuteria.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                juguete.visible && (
                  <div className="products_cont">
                    {
                      juguete.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                ebook.visible && (
                  <div className="products_cont">
                    {
                      ebook.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                tv.visible && (
                  <div className="products_cont">
                    {
                      tv.items.map((item, i) => (
                        <div key={item.id} className="product_cont shadow">
                          <button
                            className="product"
                          >
                            <img id={item.id} onClick={()=>this.handleProduct(item)} src={item.url} alt=""/>
                          </button>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </section>
        </Modal>
      </div>
    )
  }
};

const mapStateToProps = state => ({ store: state.store });
const mapDispactchToProps = dispatch => bindActionCreators({ onStore }, dispatch);

export default connect(mapStateToProps, mapDispactchToProps)(Store);

