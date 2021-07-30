<template> 
    <div>
        <select v-model="select">
            <option :value="city.v" :key="i" v-for="(city,i) in options">{{city.t}}</option>
        </select>
        <!-- 
            for문을 돌리면 key값(== 고유의 값)을 잡아줘야한다. 
            city에 i(==인텍스 번호)에 맞는 객체가 대입된다.
            options 배열에 든 만큼 for문 돌림

            :value == v-bind:value
        -->


        <!-- 테이블에 적용 -->
        <table>
            <thead>
                <th>제품명</th>
                <th>제품가격</th>
                <th>배송비</th>
                <th>제품카테고리</th>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.catagory}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            options : [
                {v:'02', t:'서울'},
                {v:'21', t:'부산'},
                {v:'064', t:'제주'}                
            ],

            select : '064',

            productList:[
                {product_name:'기계식 키보드', price: 25000, delivery_price: 5000, catagory:'전자제품'},
                {product_name:'마우스', price: 5000, delivery_price: 3000, catagory:'전자제품'},
                {product_name:'모니터', price: 100000, delivery_price: 8000, catagory:'전자제품'},
            ]
        
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