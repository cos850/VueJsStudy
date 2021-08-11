import axios from 'axios';  // axios 를 쓸 수 있는 상태로 만들기
// 사용방법 : https://github.com/axios/axios

export default {
    mounted() {
        console.log("minxins mounted() ");

        // 해당 mixin파일이 먼저 실행되고 그 다음에 이 js파일을 mixin한 컴포넌트의(22.Mixins.vue) mounted가 실행된다
    },
    methods: {
        async $callAPI(url, method, data) {     
            return (await axios({
                method : method,    
                url : url,         
                data : data        
               
            }).catch(e => {
                console.log(e);
            })).data; 
        }

        /** $붙인 이유
         * mixin 으로 함수를 만들 경우, 
         * 이 함수를 사용하는 컴포넌트에서 mixin한 파일 안의 함수들과 같은 이름의 함수를 만들경우 
         * override 되어 충돌이 일어난다
         * 이걸 방지하기 위해 특이한 프리패스를 사용한 것임
         */
    },
}