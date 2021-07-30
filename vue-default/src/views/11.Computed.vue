<template> 
    <div>
        <input type="text" v-model="lastName">
        <input type="text" v-model="firstName">
        <h1>Hello, {{fullName}}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            firstName: '재석',
            lastName: '유'

        }
    },

    computed:{
        fullName() {
            return this.lastName + this.firstName;
        }
        // 데이터 안에 fullName으로 선언된 것과 같은 효과를 지닌다. 
        // 메소드로 만들게 되면 메소드가 호출될 때마다 연산을 하게 되는데
        // computed는 처음 한번만 연산해서 data()안에서 관리가 되고 있는 것임
        // 그래서 lastName이나 firstName이 변화가 일어나면 같이 바뀐다
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