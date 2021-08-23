<template> 
    <div>
        <input type="text" v-focus />
    </div>
</template>
<script>
export default {
    directives: {
        focus: {    // template에서 v-focus로 사용가능
            mounted(el){
                el.focus();
            }
        }
    }
}
</script>