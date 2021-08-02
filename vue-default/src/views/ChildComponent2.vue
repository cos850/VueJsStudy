<template> 
    <div>
        <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            msg : '자식컴포넌트로 부터 보내는 메세지'
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
       sendFromChild() {

           this.$emit('send-message', this.msg);
            //     커스텀 이벤트 이름, 그 이벤트로 전달할 값
            // emit : 부모 컴포넌트에 이벤트 전달 (자식에서 부모로 이벤트를 발생시킨다. 커스텀 이벤트)
            
       },

       changeData() {
           this.msg = '자식컴포넌트에서 데이터 변경이 일어났습니다.';
       }
    }
}
</script>
<style scoped>

</style>