
<!-- 
    자식 컴포넌트에 있는 이벤트를 실행시키면서 데이터를 전달하는 방법
-->

<template> 
    <div>
        <h1>{{parentMsg}}</h1>
        <ChildComponent2Vue @send-message="sendMessage" />
        <!-- 
            @send-message : 자식 컴포넌트의 $emit에 정의된 'send-message'
        -->
    </div>     
</template>
<script>

import ChildComponent2Vue from "./ChildComponent2.vue";

export default {
    name: '',
    components: {ChildComponent2Vue},

    data() {
        return {    
            parentMsg : ''
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
        sendMessage(data){
            alert(data);
            this.parentMsg = data;
        }
    }
}
</script>
<style scoped>

</style>