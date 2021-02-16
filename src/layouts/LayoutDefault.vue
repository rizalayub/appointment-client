<template>
  <div>
      <div id="title">
        
        <h2>DURR DENTAL TECHNICIAN APPOINTMENT</h2>
      </div>
      <div id="logo"></div>
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
          
          <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        
        </ul>
      </div>
     </nav>

    <!-- <nav class="LayoutDefault__nav">
  


      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>

      <div class="LayoutDefault__user">
        {{ user ? user.name : `Loading...` }}
      </div>
    </nav> -->
    <main>
      <slot/>
    </main>
    <footer class="row">
      &copy; Awesome Company
    </footer>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  },
};
</script>

<style scoped>
    #title {
        width: 100%;
        background-color: rgb(226, 213, 208);
        opacity: 0.5;
        height: 150px;
        padding: 50px;
    }
    h2{       
        color: #070606;
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    #logo {
       background-image: url('../assets/logo_durr.png');
       width: 266px;
       height: 140px;
       position: absolute;
       top: 0;
    }
</style>

