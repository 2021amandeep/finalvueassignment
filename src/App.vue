<template>
  <div id="app">
    <Sidemenu />
    <!-- <Home/>
    <Register/>
    <Dashboard/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import Register from './components/Register'
// import Dashboard from './components/Dashboard.vue'
import Sidemenu from "./components/Sidemenu.vue";

export default {
  name: "App",
  components: {
    // Home,
    // Register,
    // Dashboard
    Sidemenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

