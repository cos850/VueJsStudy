export default {
    install : (app, options) => {
        // app : main.js의 createApp하는 그 app 을 뜻함
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o,i) => {
                if(o) return o[i];
            }, options);
        };
    }
}