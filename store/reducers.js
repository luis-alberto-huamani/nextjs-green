import { combineReducers } from 'redux';
import {ON_REGISTER, ON_LOGIN, ON_NAV, ON_STORE, storeSections } from './actions';
import uuid from 'uuid/v1';

export const initialState = {
  nav: false,
  registro: false,
  login: false,
  /*user:[
    {
      id: 'greenqueen',
      mail: 'admin@mail.com',
      pass: '123456',
      name: 'sophie',
      lastName: 'green',
      birthday: '01/07/2019',
      genre: 'mujer',
      perfilImg: '/static/queengreen.jpg',
      frontPageImg: '/static/queenfront.jpg',
      frontPageQuote: 'comparte con los tuyos en green link',
      greencoins: 5000,
      posts: [],
      friends: [],
      gifts: [],
    }
  ],*/
  store:{
    visible: false,
    home: true,
    productInfo: false,
    bisuteria:{
        visible: false,
        items:[
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-1',
            url: '/static/bisuteria/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-2',
            url: '/static/bisuteria/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-3',
            url: '/static/bisuteria/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-4',
            url: '/static/bisuteria/item-4.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-5',
            url: '/static/bisuteria/item-5.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'bisuteria',
            name: 'item-6',
            url: '/static/bisuteria/item-6.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
    },
    juguete: {
        visible: false,
        items: [
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-1',
            url: '/static/juguete/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-2',
            url: '/static/juguete/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-3',
            url: '/static/juguete/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-4',
            url: '/static/juguete/item-4.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
    },
    golosina: {
        visible: false,
        items: [
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-1',
            url: '/static/golosina/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-2',
            url: '/static/golosina/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-3',
            url: '/static/golosina/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-4',
            url: '/static/golosina/item-4.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-5',
            url: '/static/golosina/item-5.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'juguete',
            name: 'item-6',
            url: '/static/golosina/item-6.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
    },
    musica: {
        visible: false,
        items: [
          {
            id: uuid(),
            tag: 'musica',
            name: 'item-1',
            url: '/static/musica/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'musica',
            name: 'item-2',
            url: '/static/musica/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'musica',
            name: 'item-3',
            url: '/static/musica/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'musica',
            name: 'item-4',
            url: '/static/musica/item-4.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'musica',
            name: 'item-5',
            url: '/static/musica/item-5.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
    },
    ebook: {
        visible: false,
        items: [
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-1',
            url: '/static/ebook/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-2',
            url: '/static/ebook/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-3',
            url: '/static/ebook/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-4',
            url: '/static/ebook/item-4.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-5',
            url: '/static/ebook/item-5.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            tag: 'ebook',
            name: 'item-6',
            url: '/static/ebook/item-6.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
    },
    tv: {
        visible: false,
        items: [
          {
            id: uuid(),
            tag: 'tv',
            name: 'item-1',
            url: '/static/tv/item-1.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            name: 'item-2',
            tag: 'tv',
            url: '/static/tv/item-2.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
          {
            id: uuid(),
            name: 'item-3',
            tag: 'tv',
            url: '/static/tv/item-3.jpg',
            price: '$1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!',
          },
        ]
      }
  }
}

const nav = (state = initialState.nav, action) => {
  if (action.type === ON_NAV) {
    return !state;
  }
  return state;
}

const registro = (state = initialState.registro, action) => {
  if (action.type === ON_REGISTER) {
    return true;
  }
  return state;
};

const login = (state = initialState.login, action) => {
  if (action.type === ON_LOGIN) {
    return action.option;
  }
  return state;
}

/*const user = (state = initialState.user, action) => {
  switch (action) {
    case ON_USER_REGISTER: 
      return [...state, action.user];
    default:
      return state;
  }
}*/

  const store = ( state= initialState.store, action) => {
    if (action.type === ON_STORE && action.section === storeSections.OPEN_STORE) {
      return Object.assign({}, state, { visible: !state.visible });
    }
    if (action.type === ON_STORE && action.section === storeSections.HOME) {
      return Object.assign({}, state, {
        home: true,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      })
    }
    if (action.type === ON_STORE && action.section === storeSections.PRODUCT_INFO) {
      return Object.assign({}, state, {
        home: false,
        productInfo: true,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      })
    }
    if (action.type === ON_STORE && action.section === storeSections.BISUTERIA) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: true }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      });
    }
    if (action.type === ON_STORE && action.section === storeSections.JUGUETE) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: true }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      });
    }
    if (action.type === ON_STORE && action.section === storeSections.GOLOSINA) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: true }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      });
    }
    if (action.type === ON_STORE && action.section === storeSections.MUSICA) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: true }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: false }),
      });
    }
    if (action.type === ON_STORE && action.section === storeSections.EBOOK) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: true }),
        tv: Object.assign({}, state.tv, { visible: false }),
      });
    }
    if (action.type === ON_STORE && action.section === storeSections.TV) {
      return Object.assign({}, state, { 
        home: false,
        productInfo: false,
        bisuteria: Object.assign({}, state.bisuteria, { visible: false }),
        juguete: Object.assign({}, state.juguete, { visible: false }),
        golosina: Object.assign({}, state.golosina, { visible: false }),
        musica: Object.assign({}, state.musica, { visible: false }),
        ebook: Object.assign({}, state.ebook, { visible: false }),
        tv: Object.assign({}, state.tv, { visible: true }),
      });
    }
    return state;
  }

export const greenlink = combineReducers({
  registro,
  login,
  nav,
  store,
});