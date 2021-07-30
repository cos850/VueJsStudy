<template> 
    <div>
        <page-title :title="title"/> <!--  v-bind를 사용하면 동적인 데이터를 전달할 수 있다. -->
        <ChildComponentVue likes="24"/> <!-- 이렇게 전달하면 23이 문자로 전달됨, 숫자로 전달하고 싶으면 방법은 두 가지 -->
        <!-- 숫자 전달 -->
        <ChildComponentVue :likes="25" />   <!-- 동적 바인딩으로 23이라고 하면 숫자로 인식 -->
        <ChildComponentVue :likes="likes" />

        <!-- 
            boolean 값 역시 그냥 할당해주면 문자열로 가기 때문에 boolean true false 로 사용하고 싶다면
            숫자 전달처럼 하면 된다 
        -->

        <!-- boolean 값 전달 -->
        <ChildComponentVue :isOk="true" />
        <ChildComponentVue :isOk="false" /> 
        
        <ChildComponentVue :likes="23" :isOk="true" :author="author"/>
 
        <!-- 
            한 컴포넌트를 여러 개 호출해서 데이터를 넘겨주면 자식컴포넌트 형식을 기반으로 컴포넌트를 선언한 수 만큼 반복한다 
            현재 예제 ChildComponentVue 선언 수 : 5개 
            위의 경우, 자식 컴포넌트인 ChildComponent 의 templeate 의 형식으로 
            >>  <div>likes : {{likes}} </div>
                <div>isOk : {{isOk}} </div>
            이 형식이 다섯번 반복되어 화면에 나타난다. 값은 부를 때 값을 준 것만 맞게 변화 
            
            (없으면 default 값,
             Object 타입이 포함되어있는데 데이터를 주지 않을 경우엔 오류남)


            한번만 반복하게 하려면 한번에 속성을 다 줘야한다.
            ex) <ChildComponentVue :like="23" :isOk="true" :commentIds="[1,5,2,3]" />
        -->
    </div>
</template>
<script>

import PageTitleVue from '../components/PageTitle.vue' ;
import ChildComponentVue from './ChildComponent.vue';

export default {
    name: '',
    components: {'page-title' : PageTitleVue, ChildComponentVue}, // PageTitleVue를 page-title로 쓰겠다 ! >> template에서 바꾼 이름으로 적용가능

    data() {
        return {    
            title : '부모 컴포넌트에서 전송할 페이지 타이틀',
            likes : 26,
            isOk : true,
            commentIds : [1,3,5,7],
            author :  {name : '홍길동', company : '회사이름'}
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