<template> 
    <div>
        <input type="text" v-model.number="x1" /> <!-- 원래 input은 문자로 인식하기 때문에 .number로 숫자로 인식하게 해야한다 -->
        <input type="text" v-model.number="x2" />
        <input type="text" v-model.number="y" />
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            x1:0,
            x2:0,
            y:0
        }
    },
    watch:{
        // 여기에 선언된 data key 값을 계속 지켜보다가 변경사항이 생기면 아래를 수행함
        // computed와 다른점은 computed는 선언한 key 값을 지켜보는게 아니라 그 안에 쓰인 다른 key 값의 변경사항을 감지한다.
        x1() {
            this.y = this.x1 + this.x2;
        },
        x2() {
            this.y = this.x1 + this.x2;
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