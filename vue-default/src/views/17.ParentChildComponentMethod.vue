
<!-- 자식컴포넌트에서 정의된 이벤트를 부모컴포넌트에서 발생시키기 -->

<template> 
    <div>
        <button type="button" @click="callChildFunc">부모 클릭</button>
        <ChildComponent2Vue ref="child_component" />
        <!-- 
            ref
            : html 에서 id 와 동일하게 작용된다
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
        callChildFunc() {
            // this.$refs.child_component  // ref="child-component" 호출
            // .$refs                      // childComponent2 에서 특정 html 태그 객체에 접근
            // .child_btn                  // ChildComponent ref="child_btn" 호출
            // .click();                   // 해당 ref의 click이벤트 호출

            this.$refs.child_component.childFunc();   // 부모컴포넌트에서 자식 컴포넌트의 메소드를 이런식으로 직접 호출할 수 있다.
        }
    }
}
</script>
<style scoped>

</style>