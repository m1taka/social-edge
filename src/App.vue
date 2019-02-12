<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header: Header
  }
};
</script>

<style>
@font-face {
  font-family: "Vegan";
  src: url("./assets/fonts/Vegan.ttf");
}
@font-face {
  font-family: "Black_";
  src: url("./assets/fonts/Black_.ttf");
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #ffffff;
}
*,
*::before,
*::after {
  background-color: #ffffff;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
}
#app {
  background-color: azure;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 60px; */
}
ul {
  text-decoration: none;
}
a, u {
  /* display: inline-block; */
  text-decoration: none !important;
}

/* Comments */
/*-- Global Selectors --*/
a{
    color:#47649F;
}

/* body{
    font-family:'helvetica';    
} */

/*-- Bootstrap Override Style --*/


/*-- Content Style --*/
.post-footer-option li{
    float:left;
    margin-right:50px;
    padding-bottom:15px;
}

.post-footer-option li a{
    color:#AFB4BD;
    font-weight:500;
    font-size:1.3rem;
}

.photo-profile{
    border:1px solid #DDD;    
}

.anchor-username h4{
    font-weight:bold;    
}

.anchor-time{
    color:#ADB2BB;
    font-size:1.2rem;
}

.post-footer-comment-wrapper{
    background-color:#F6F7F8;
}
</style>
