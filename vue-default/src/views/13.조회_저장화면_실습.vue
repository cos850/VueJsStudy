<template> 
    <div>

        <!--search-->
        <div>
            <select v-model="selectedCity">
                <option :val="city.code" :key="i" v-for="(city, i) in cityList">{{city.name}}</option>
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList"/>
            <button type="button" @click="searchUserList">조회</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(person, i) in userList">
                        <td>{{person.name}}</td>
                        <td>{{person.age}}</td>
                        <td>{{person.job}}</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!--save-->
        <div>
            <input type="text" v-model="name"> 
            <input type="text" v-model.number="age"> 
            <input type="text" v-model="job">

            <button type="button" @click="saveUserInfo">저장</button>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},

    data() {
        return {    
            //search
            cityList: [
                {name:'서울', code:'02'},
                {name:'부산', code:'21'},
                {name:'제주', code:'063'}
            ],
            selectedCity : "",
            userName : "",
            userList:[],

            //save
            name:"",
            age:"",
            job:""
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
        //save
        saveUserInfo(){
            if(this.name ==''){
                return this.$swal('사용자 이름을 입력하세요')
            }
            if(this.age == 0 || this.age == ''){
                return alert("나이를 입력하세요");
            }
            
            const params = {
                name : this.name,
                age : this.age,
                job : this.job
            }

            const r = this.saveData(params);
            if(r == "S"){
                alert("사용자 정보가 생성되었습니다.")
            }
        },
        saveData(params){
            console.log(params);

            const r = "S";
            return r;
        },

        // search
        searchUserList() {
            const params = {
            selectedCity : this.selectedCity,
            userName : this.userName
            }

            this.userList = this.getUserList(params);
        },

        getUserList(params) {
            console.log(params);
            
            let list = [
                {name:"유재석", age : 50, job:"연예인"},
                {name:"하하", age : 40, job:"연예인"},
                {name:"김종국", age : 45, job:"연예인"},
                {name:"박재형", age : 26, job:"연예인"},
            ];
            
            return list;
        
        }
    }
}
</script>
<style scoped>

</style>