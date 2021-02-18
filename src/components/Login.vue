<template> 
    <div id="login">
    <div id="title">
        <h2>DURR DENTAL TECHNICIAN APPOINTMENT</h2>
    </div>
    <form class="lg" v-on:submit="login">
        <!-- Email input -->
        <div class="form-group">
            <label class="form-label" for="form1Example1">User Name</label>
            <input type="text" id="form1Example1" class="form-control"  v-model="input.username" placeholder="Username" />
            
        </div>

        <!-- Password input -->
        <div class="form-group">
            <label class="form-label" for="form1Example2">Password</label>
            <input type="password" id="form1Example2" class="form-control" v-model="input.password" placeholder="Password" />
            
        </div>
        <div v-if="!successLogin" class="form-group err">
            <label class="form-label" for="form1Example2">*Username or password is not match</label>            
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
    </div>
</template>
<script>

//import axios from 'axios'
export default {
        name: 'Login',
        data() {
            return {
                successLogin: true,
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        // mixins: [myLogin],
        mounted() {
            //this.checkLogIn()
        }, 
        created(){
           //this.checkLogIn()
        },      
        methods: {
            checkLogIn(){
                if(localStorage.getItem('login' == true)){

                    this.$router.replace("/home").catch(() => {})
                }
            },
            login: function(event){
                if(this.input.username != "" && this.input.password != "") {                   
                    this.$login(this.input.username, this.input.password).then(data => {     
                         if(data.status == 1){
                            localStorage.setItem('login',true)
                             localStorage.setItem('name',data.name)
                             localStorage.setItem('id',data.technicianid)
                            this.$router.replace("/home").catch(() => {})
                        }
                        else{
                            this.successLogin = false
                            localStorage.setItem('login',false)
                        }
                    })
                }
                event.preventDefault()

            }
        }
    }
</script>
<style scoped>
    .err{
        color: red;
    }
    #title {
        position: absolute;
        margin: auto 20%;
        width: 60%;
        top: 50px;
        /* background-color: rgb(226, 213, 208); */
        opacity: 0.5;
        height: 70%;
        padding: 20px;
    }
    h2{       
        color: #070606;
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: rgb(226, 213, 208);
    }
    #login{
        background-image: url('../assets/login-bg.png');
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .lg {
        position: relative;
        width: 400px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: 150px auto;
        padding: 20px;
    }
</style>