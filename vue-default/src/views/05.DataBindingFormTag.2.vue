<template> 
    <div>
        <!-- select -->
        <select v-model="city"> <!--v-model에 넣은key 값과 동일한 value를 가진 option 태그가 선택된다 -->
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="063">제주</option>
        </select>

        <!-- checkbox -->
        <!-- v-model은 checked 속성과 연결된다 true/false | value의 값이 들어오기도 함 -->
        <label> <input type="checkbox" v-model="checked" value="서울" />서울</label>
        <label> <input type="checkbox" v-model="checked" value="부산" />부산</label>
        <label> <input type="checkbox" v-model="checked" value="제주" />제주</label>
    
        <br>
        <span>체크한 지역 : {{checked}} </span>
        <br>

        <!-- radio -->
        <!-- checked 속성과 연결된다. -->
        <label> <input type="radio" value="서울" v-model="picked" /> 서울 </label>
        <label> <input type="radio" value="부산" v-model="picked" /> 부산 </label>
        <label> <input type="radio" value="제주" v-model="picked" /> 제주 </label>

        <br>
        <span>선택한 지역 : {{picked}} </span>
        <br>

        <!-- value 속성과 databinding을 사용하고 싶은 경우 v-bind:value=""  이렇게 사용하면 된다. -->
        <label> <input type="radio" v-bind:value="value1" v-model="picked2" /> 서울 </label>
        <label> <input type="radio" v-bind:value="value2" v-model="picked2" /> 부산 </label>
        <label> <input type="radio" v-bind:value="value3" v-model="picked2" /> 제주 </label>

         <br>
        <span>선택한 지역 : {{picked}} </span>
        <br>
    </div>

</template>
<script>
export default {
    name: '', 
    components: {},  
    data() {
        return {
            city:"063",
            checked: [],
            picked :"",
            picked2 :"",
            value1: "서울",
            value2: "부산",
            value3: "제주"
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