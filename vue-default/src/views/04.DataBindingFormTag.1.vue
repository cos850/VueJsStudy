<template> 
    <div>
            <!-- value속성을 쓸 수 있는 태그들이 있는데 그 태그들에, v-model을 적용할 수 있다
                 v-model에 data의 key를 입력해주면 해당 태그의 value 속성에 입력이 된다 (checkBox rodio는 다르게 작용)
                 적용가능 태그 예) input type="text/number/email", textarea, select, radio, checkbox ...
            -->

        <input type="text" v-model="valueModel"/>

        <input type="number" v-model.number="valueModel2"/> <!-- .number : 숫자형 타입으로 받을 수 있다 -->


        <!-- <textarea>{{valueModel3}}</textarea>       // error : v-model을 써야함 -->
        <textarea v-model="valueModel3"></textarea>
        
    </div>
</template>
<script>
export default {
    name: '', 
    components: {},  
    data() {
        return {    
            valueModel: 'South Korea',
            valueModel2: 12,
            valueModel3: "안녕하세요"
        }
    },
    setup() {
        
    },
    created() {
        
    },
    mounted() {
        // console.log(valueModel);       // error : data안에 선언된 key들은 this를 통해서만 접근이 가능하다
        console.log(this.valueModel);
    },
    unmounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>