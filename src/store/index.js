import { createStore } from 'vuex'

import nav from './navState.js'
import home from './homeState.js'
import about from './aboutState.js'
import shop from './shopState.js'
import cart from './cartState.js'

export default createStore({
  modules: {
    nav: nav,
    home: home,
    about: about,
    shop: shop,
    cart: cart,
  },
  state: {
    
  },
  mutations: {
  },
  actions: {
  }
})
