
<!-- 자식컴포넌트에서 정의된 이벤트를 부모컴포넌트에서 발생시키기 -->

<template> 
    <div>
        <ChildComponent2Vue ref="child" />
    </div>     
</template>
<script>

import ChildComponent2Vue from "./ChildComponent2.vue";

export default {
    name: '',
    components: {ChildComponent2Vue},

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
        
    }
}
</script>
<style scoped>

</style>