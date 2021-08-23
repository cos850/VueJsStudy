import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

// 외부라이브러리를 모든 컴포넌트에서 사용하려면 해당 파일에서 import해줘야한다. 
// (특정 컴포넌트 내에서만 사용하려면 컴포넌트 내에서 import하면 된다)
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
    en : {
        h1 : 'hello!'
    },
    ko : {
        hi : '안녕하세요!'
    }
}

const app = createApp(App);
app.use(router)             // app에 router 를 사용한다
app.mixin(mixins)
app.use(VueSweetalert2)
app.use(i18nPlugin, i18nStrings)    // i18n.js 의 install : (app, options) 가 app = i18nPlugins, opions = i18nStrings  이렇게 전달됨
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
});
app.mount('#app')          // /public/index.html의 id="app"에 App.vue가 로드된다



