<template>
    
    <div class="modal-container">
        <header>
            <slot name="header"></slot>  <!-- 이 부분이 SlotUseModalLayout의 v-slot:header의 내용으로 변경된다 -->
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<style>
/**
css 형태를 정의해둔 컴포넌트를 만들어 두면
다수의 개발자가 여러 모달창을 만들어 사용하더라도 동일한 UX를 유지할 수 있다.
*/
</style>