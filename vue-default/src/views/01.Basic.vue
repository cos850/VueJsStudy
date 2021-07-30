<template> 
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="title" />
    </div>
</template>
<script>
export default {

    // 기본 스크립트 구성 //

    name: '', // 이 컴포넌트의 이름을 지정할 수 있다 (선택)
    components: {},  // 이 컴포넌트를 다른 여러군데( {} 에 지정한 곳)에 import해서 사용한다

    // data binding
    data() {
        return {    
            // 이 안에 정의된 키 값들은 이 컴포넌트의 html 코드 안 혹은 다른 js 코드 안에서 사용할 수 있는 데이터 값들을 정의한다
            // 사용하는 방법은 {{title}} 이런식으로 사용
            // 양방향 데이터 바인딩을 지원한다. (똑같은 key의 value값은 똑같이 적용된다. 한쪽 값이 바뀌면 다른쪽도 같이 바뀐다)
            title: 'Hello World'
        }
    },
    setup() {
        
    },
    created() {
        // 이 vue 컴포넌트가 실행이 되는 순간에 이안의 코드가 자동으로 실행된다
    },
    mounted() {
        // 이 vue 컴포넌트가 로딩이 끝난 순간에 자동으로 실행된다
    },
    unmounted() {
        // 이 컴포넌트에서 다른 컴포넌트로 이동할 때 자동으로 실행
    },
    methods: {
        // function 함수를 정의해서 컴포넌트 안에서 사용할 수 있게 한다
    }
}
</script>
<style scoped>

</style>