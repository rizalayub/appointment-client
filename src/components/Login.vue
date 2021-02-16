<template> 
    <div id="login">
    <div id="title">
        <h2>DURR DENTAL TECHNICIAN APPOINTMENT</h2>
    </div>
    <form class="lg">
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

        

        <!-- Submit button -->
        <button v-on:click="login()" class="btn btn-primary btn-block">Sign in</button>
</form>
    </div>
</template>
<script>
export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>
<style scoped>
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