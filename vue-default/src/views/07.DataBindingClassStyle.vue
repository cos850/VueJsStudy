<template> 

    <div>
        <!-- 클래스 스타일 바인딩 -->
        <!-- class를 이미 쓰고 있는데 뒤에서 v-bind:class를 하면 그냥 뒤에 추가된다 -->
        <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}" >Class Binding</div>
        <!-- 배열 사용 -->
        <div class="container" v-bind:class="[activeClass, RedClass]" >Class Binding</div>

        <!-- 인라인 스타일 바인딩 -->
        <div v-bind:style="styleObject" >인라인 스타일 바인딩</div>
        <!-- 배열 사용 -->
        <div v-bind:style="[baseStyle, addStyle]" >인라인 스타일 바인딩</div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            isActive : true, // true 면 추가되고 false 면 추가되지 않는다.
            isRed : true,

            activeClass : 'active',
            RedClass : 'text-red',

            styleObject : {
                backgroundColor:'green',   // 인라인으로 넣을때는 camelCase 로 !
                color : 'white',
                fontWeight: 'bold'
            },

            baseStyle : "background-color:gold",
            addStyle : "color:blue; font-weight:bold"
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
    .container{
        width:100%;
        height:200px;

    }
    .active{
        background-color:yellow;
        font-weight: bold;
    }
    .text-red {
        color:red;
    }
</style>