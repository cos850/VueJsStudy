<template> 
    <div>
        <button type="button" @click="getProductList">조회</button>

        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>배송료</th>
                    <th>카테고리</th>
                </tr>
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
import axios from 'axios';  // axios 를 쓸 수 있는 상태로 만들기
// 사용방법 : https://github.com/axios/axios

export default {
    name: '',
    components: {},

    data() {
        return {    
            productList : []
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

        async getProductList() {    // 함수 내에 await 을 쓰려면 반드시 함수 앞에 async 를 붙여야한다
            this.productList = await this.api('https://25ae34de-0caf-4ac0-ae03-4c0e2ba9620d.mock.pstmn.io/getproductlist', 'get', {});
            console.log(this.productList);
        },

        // async await :  비동기 통신 (서버로 호출한 결과를 받을 때까지 대기하겠다 async-await)
        async api(url, method, data) {
            return (await axios({
                method : method,    // get put post delete...
                url : url,          // 호출 url
                data : data         // 서버로 줄 데이터
                // 에러가 나면 받는다
            }).catch(e => {
                console.log(e);
            })).data; // 서버에서 response 한 데이터를 .data로 받아올 수 있다.
        }
    }
}
</script>
<style scoped>

</style>