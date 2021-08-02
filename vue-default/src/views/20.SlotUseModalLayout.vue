<template>
    <modal-layout>
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
            <!-- 
                v-slot:header 하면 
                
                이 template 안에 감싸져있는 html 코드들이 (여기서는 h1 태그)
                SlotModelLayout 의 name=header 로 된 부분에 교체가 된다
                
                이름을 안정하면 default 로 사용

                자식 컴포넌트의 이름(name="")따라 가는 것이기 때문에 여기서 선언되는 위치는 중요하지 않다. 
                자식 컴포넌트 SlotModalLayout.vue의 디자인과 순서로 보여진다.
            -->
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </modal-layout>

</template>
<script>
import SlotModalLayout from "./20.SlotModalLayout.vue";
export default {
    components : {"modal-layout" : SlotModalLayout },
};
</script>