<template> 
    <div>
        <!-- provide 미사용 -->
        <!-- <ProvideInjectChildChild :itemLength="itemLength" />     -->
        <!-- 
                본인의 자식 컴포넌트(ProvideInjectChildChild) 에도 itemLength를 전달하기 위해 똑같이 선언해서 넣어줌
                그러면 ProvideInjectChildChild 에서는 이걸 받기 위해 itemsLength를 props에서 선언해야 함
        -->

        <!-- 
            provide 사용 
            (아무것도 전달하지 않아도 해당 부모컴포넌트(ProvideInject.vue)에서 주는 데이터를 
             자식 컴포넌트(ProvideInjectChildChild)에서 받을 수 있다)
        -->
        <ProvideInjectChildChild />
    </div>
</template>
<script>
import ProvideInjectChildChild from "./ProvideInjectChildChild.vue"
export default {
    components: {ProvideInjectChildChild},

    // provide 미사용
    // props() {
    //     return {
    //         itemLength : {      // 부모컴포넌트(ProvideInject.vue) 에서 전달한 itemLength 받아오기
    //             type : Number,
    //             default : 0
    //         }
    //     }
        
    // },

    
}
</script>