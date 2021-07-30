<template> 
    <div>
        <div>likes : {{likes}} </div>
        <div>isOk : {{isOk}} </div>
        <div>author name : {{author.name}} </div>
    </div>
</template>
<script>
export default {
    name: '',
    props : {
        likes : {
            type : Number,
            default : 0
        },
        isOk : {
            type : Boolean,
            default : false
        },
        commentIds : {
            type : Array
            // 얘는 default 값을 지정 안해도 된다.
        },
        author : {
            type : Object
        }
    },

    data() {
        return {    
            
        }
    },
    setup() {
        
    },
    created() {
        
    },
    mounted() {
        // 여기서 부모의 값을 받아서 뿌릴 수 있음
        console.log(this.commentIds);
    },
    unmounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>
