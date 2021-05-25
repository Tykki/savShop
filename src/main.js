import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";

import {library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import {
  faPlus, faMinus, faTrash, faCheck, faSearch, faShoppingCart, faGlobeAfrica, faRecycle, faGrinBeam
} from "@fortawesome/free-solid-svg-icons"
library.add(faPlus, faMinus, faTrash, faCheck, faSearch, faShoppingCart, faGlobeAfrica, faRecycle, faGrinBeam);


createApp(App).component('icon', Icon).use(store).use(router).mount('#app')
