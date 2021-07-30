<template> 
    <div>
        <button type="button" @click="childFunc" >클릭 </button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            
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
        childFunc() {
            alert('부모컴포넌트에서 직접 발생시켰습니다.')
        }
    }
}
</script>
<style scoped>

</style>