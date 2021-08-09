<template> 
    <div>

        <!-- provide 미사용 시 ProvideChildChild.vue(자식의 자식) 에 데이터 전달하기 -->
        
        <!-- <ProvideInjectChild :itemLength="itemLength"/>  -->
            <!-- 
                    ProvideInjectChild 에 itemLength 전달
                    그럼 자식 컴포넌트인 ProvideInjectChild에는 props 안에 itemLength 가 정의되어 있어야한다.
            -->

        <!-- provide 사용 시 ProvicdeChildChild 에 데이터 전달 -->

        <ProvideInjectChild /> <!-- 그냥 자식컴포넌트 선언만 했음 -->
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";

export default {
    
    name: '',
    components: {ProvideInjectChild},

    data() {
        return {    
            items : ["A", "B"]
        };
    },
    provide(){
        return {
            itemLength : this.items.length
        }
    }
    
}
</script>