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

export default {
    name: '',
    mixins : [],    // 사용하려는 import된 공통함수를 mixins 에 추가하여 사용한다.
    components: {},

    data() {
        return {    
            productList : []
        }
    },

    mounted() {
        console.log("conponent mounted()");
    },

    methods: {
        // mixin을 하면 이 안에 ApiMixin의 함수들이 들어가는 것과 동일하게 작용한다.


        async getProductList() {    
            this.productList = await this.$api(
                'https://25ae34de-0caf-4ac0-ae03-4c0e2ba9620d.mock.pstmn.io/getproductlist', 
                'get', 
                {});
            console.log(this.productList);
        },

        
        
    }
}
</script>