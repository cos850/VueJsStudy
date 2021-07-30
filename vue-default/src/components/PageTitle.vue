<template> 
    <h1 class="page-title">{{title}}</h1>
</template>

<script>
export default {
    props : {   // 이 PagaTitle.vue를 호출하는 곳(부모 컴포넌트)에서 data를 던져주는 걸 받을 데이터를 정의하는 곳, 
                // {{}} 로 사용할 수 있다.
        title : {   // vue 컴포넌트에서 데이터 필드의 key와 똑같은 것
            type : String,
            default : '페이지 타이틀'
        }
    }
}
</script>
<style scoped>
.page-title {
    padding-left: 7px;
    border-left: 4px solid green;
    text-align: left;
}
</style>