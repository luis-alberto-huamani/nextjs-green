webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! exports provided: initialState, greenlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenlink", function() { return greenlink; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store/actions.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);




var initialState = {
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
  store: {
    visible: false,
    home: true,
    productInfo: false,
    bisuteria: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-1',
        url: '/static/bisuteria/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-2',
        url: '/static/bisuteria/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-3',
        url: '/static/bisuteria/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-4',
        url: '/static/bisuteria/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-5',
        url: '/static/bisuteria/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-6',
        url: '/static/bisuteria/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    juguete: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-1',
        url: '/static/juguete/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-2',
        url: '/static/juguete/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-3',
        url: '/static/juguete/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-4',
        url: '/static/juguete/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    golosina: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-1',
        url: '/static/golosina/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-2',
        url: '/static/golosina/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-3',
        url: '/static/golosina/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-4',
        url: '/static/golosina/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-5',
        url: '/static/golosina/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-6',
        url: '/static/golosina/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    musica: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-1',
        url: '/static/musica/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-2',
        url: '/static/musica/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-3',
        url: '/static/musica/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-4',
        url: '/static/musica/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-5',
        url: '/static/musica/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    ebook: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-1',
        url: '/static/ebook/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-2',
        url: '/static/ebook/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-3',
        url: '/static/ebook/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-4',
        url: '/static/ebook/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-5',
        url: '/static/ebook/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-6',
        url: '/static/ebook/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    tv: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'tv',
        name: 'item-1',
        url: '/static/tv/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        name: 'item-2',
        tag: 'tv',
        url: '/static/tv/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        name: 'item-3',
        tag: 'tv',
        url: '/static/tv/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    }
  }
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.nav;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_NAV"]) {
    return !state;
  }

  return state;
};

var registro = function registro() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.registro;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_REGISTER"]) {
    return true;
  }

  return state;
};

var login = function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.login;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_LOGIN"]) {
    return action.option;
  }

  return state;
};
/*const user = (state = initialState.user, action) => {
  switch (action) {
    case ON_USER_REGISTER: 
      return [...state, action.user];
    default:
      return state;
  }
}*/


var store = function store() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.store;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].OPEN_STORE) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      visible: !state.visible
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].HOME) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: true,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].PRODUCT_INFO) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: true,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].BISUTERIA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: true
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].JUGUETE) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: true
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].GOLOSINA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: true
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].MUSICA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: true
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].EBOOK) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: true
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TV) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: true
      })
    });
  }

  return state;
};

var greenlink = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  registro: registro,
  login: login,
  nav: nav,
  store: store
});

/***/ })

})
//# sourceMappingURL=_app.js.2e0eef3dad78c50c47f1.hot-update.js.map