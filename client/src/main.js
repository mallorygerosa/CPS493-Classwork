import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma'

import {Notification} from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'


import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
.use(router)
.use(Notification)
.use('#app')