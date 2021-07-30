import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 외부라이브러리를 모든 컴포넌트에서 사용하려면 해당 파일에서 import해줘야한다. 
// (특정 컴포넌트 내에서만 사용하려면 컴포넌트 내에서 import하면 된다)
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')

// app에 router 를 사용할 것이고
// /public/index.html의 id="app"에 App.vue가 로드된다



