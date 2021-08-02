
<!-- 
    Slot : 컴포넌트의 재활용, 컴포넌트 내에서 다른 컴포넌트를 사용할 때 자식 컴포넌트의 ui를 재 정의하여 쓸 수 있는 기능
-->

<template> 
    <div>
        <button @click="showData" type="button">부모 버튼</button>
        <ChildComponent2Vue ref="child_component"/>
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
    computed : {    // 이 안에 정의된 데이터안에 있는 값의 변경을 확인하는 기능
        msg() {
            return this.$refs.child_component.msg;
            // 자식 컴포넌트의 msg 에 변경되는 값을 넣어준다
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
        }, 

        showData() {
            alert(this.msg);
        }
    }
}
</script>
<style scoped>

</style>