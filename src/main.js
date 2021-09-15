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


const app = createApp(App)
app.component('icon', Icon).use(store).use(router).mount('#app')

app.config.globalProperties.$filters = {
  currency(value) {
    return '$' + parseFloat(value).toFixed(2);
  }
}