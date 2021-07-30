<!-- 일반 태그 속성에 데이터 바인딩하기 -->

<template> 
    <div>
        <img v-bind:src="url" /> 
        <!--  == <img src="https://kr.vuejs.org/images/logo.png"> -->

        <br>
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">Click</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            url: "https://kr.vuejs.org/images/logo.png",
            textValue : ''
        }
    },
    setup() {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    unmounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>