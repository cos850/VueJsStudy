<template> 

    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1" />
            <span> + </span>
            <input type="text" v-model.number="num2" />
            <span> = </span>
            <span> {{result}} </span>
        </div>
    </div>
    
</template>
<script>
import {reactive, computed, toRefs} from 'vue';   

function plusCalculator() {
    let state = reactive({
            num1 :0,
            num2 : 0,
            result : computed(()=> state.num1 + state.num2)
        });

    return toRefs(state);   // toRefs로 return 해줘야 외부에서 선언된 state를 반응형으로 사용할 수 있다 
}

export default {
    name: 'calculator',
    setup() {
        let {num1, num2, result} = plusCalculator();    // num1, num2, result 를 plusCalculator 함수(외부함수) 를 통해 받아옴
        return {
            num1, num2, result
        };
    }, 
};
</script>