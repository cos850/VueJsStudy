<template> 
    <div>
        <PageTitleVue title="부모 컴포넌트에서 전송할 페이지 타이틀"/> 
        <!-- 
            title : 태그의 속성, 속성으로 지정할 값은 반드시 해당 컴포넌트의 props 안에 정의되어 있어야 한다
            그러면 자동으로 title 값을 받아서 사용해줌 
        -->
    </div>
</template>
<script>

import PageTitleVue from '../components/PageTitle.vue'  // 자식 컴포넌트 (현재 파일 = 부모 컴포넌트)

export default {
    name: '',
    components: {PageTitleVue},

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