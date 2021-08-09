<template> 
    <div>
        Items Length : {{ this.itemLength }}
        <br>
        Items : {{ this.items }}
    </div>
</template>
<script>
export default {
    
    // provide 미사용
    // props : {
    //     itemLength : {      // 부모컴포넌트 ProvideInjectChild 에서 받아온 itemLength
    //         type : Number,
    //         default : 0
    //     }
    // },

    inject: ["itemLength", "items"]    // 부모의 부모 컴포넌트에서 provide에 선언한 key 값을 배열형태로 넣어주면 사용할 수 있음
};
</script>