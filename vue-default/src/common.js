import {reactive, computed, toRefs} from 'vue';   

function plusCalculator() {
    let state = reactive({
            num1 :0,
            num2 : 0,
            result : computed(()=> state.num1 + state.num2)
        });

    return toRefs(state);   // toRefs로 return 해줘야 외부에서 선언된 state를 반응형으로 사용할 수 있다 
}

export {
    plusCalculator
};