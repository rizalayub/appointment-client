<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#/home">Home <span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#/new-appointment">New Appointment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about">About</a>
          </li>
          
          <li>
              <a class="nav-link" @click="logOut">Logout</a>
            
          </li>
         
        
        </ul>
      </div>
      <span class="techName">Herzlich willkommen {{name}}</span>
     </nav>
</template>
<script>
export default {
    name: 'Menu',
    data() {
      return {
         name: '' 
      }
    },
    created() {
      this.checkName()
    },
    methods: {
        checkName(){
           this.name = localStorage.getItem('name')
        },
        logOut(){
             localStorage.removeItem('login');
              localStorage.removeItem('name');
              localStorage.removeItem('id');
             this.$router.push("/login").catch(() => {})
        }
  }
}
</script>

<style scoped>
.techName {
    float: right;
}
</style>