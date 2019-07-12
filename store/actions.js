export const ON_NAV = 'ON_NAV';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGIN = 'ON_LOGIN';
export const ON_USER = 'ON_USER';
export const ON_STORE = 'ON_STORE_SECTIONS';

export const storeSections = {
  OPEN_STORE: 'OPEN_STORE',
  HOME: 'HOME',
  PRODUCT_INFO: 'PRODUCT_INFO',
  BISUTERIA: 'BISUTERIA',
  JUGUETE: 'JUGUETE',
  GOLOSINA: 'GOLOSINA',
  MUSICA: 'MUSICA',
  EBOOK: 'EBOOK',
  TV: 'TV',
};
export const userAction = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT'
}

export const onNav = () => ({ type: ON_NAV, });
export const onRegister = () => ({ type: ON_REGISTER });
export const onLogin = option => ({ type: ON_LOGIN, option });
export const onUser = payload => ({ type: ON_USER, payload });
export const onStore = section => ({ type: ON_STORE, section });