<template>
    <div>

        <!-- <h1 v-if="bRender">bRender 값이 true이면 , h1블록이 화면에 보이게 됩니다</h1>
        <h1 v-else>bRender 값이 false , h1블록이 화면에 보이게 됩니다</h1> -->

        <h1 v-show="BRender">show가 true이면 보이게 됩니다.</h1>

         <!-- 
             v-if 와 v-show 는 비슷해보이지만 작동하는 방식이 다름
             v-if는 조건이 참이면 해당 태그 블록을 생성하고 아니면 해당 태그가 생성되지 조차 않는다
             v-show는 해당 조건이 false이면 해당 태그에 style="display:none;" 이 추가되어 보이지만 않게 된다
         -->

        <!-- <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else-if="type=='C'">C</h1>
        <h1 v-else>Other</h1> -->

    
    </div> 
    
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            bRender:false,

            type:'B'
        };
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