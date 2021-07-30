<template> 
    <div>
        <!-- 'v-on' : 이벤트와 관련된 것을 다룰때 사용,(== '@') 여러개의 함수를 , 를 통해 구분해 추가할 수 있다 -->
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Count is  : {{counter}} </p>

        <select v-model="selectVal" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            counter:0,
            
            selectVal:""
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
        increaseCounter() {
            this.counter += 1;
        },

        changeSelect() {
            alert(this.selectVal);
        }
    }
}
</script>
<style scoped>

</style>