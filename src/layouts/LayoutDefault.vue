<template>
  <div>
      <div id="title">
        
        <h2>DURR DENTAL TECHNICIAN APPOINTMENT</h2>
      </div>
      <div id="logo"></div>
      <Menu />
     
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
import Menu from '../components/Menu'
export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: null,
    };
  },
  components: {
    Menu
  }
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

