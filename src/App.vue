<template>
  <div id="app">
    <div id="topnav">
      <router-link to="/menu" id="menu-icon">
        |||
      </router-link>
      <div id="filter-by">
        <div class="label">filter by:</div>
        <Leaves/>
      </div>
      <div id="search">
        <input type="text" placeholder="search"/>
      </div>
    </div>
    <router-view/>
    <div id="bottomnav">
      <router-link to="/videos">
        <img src="videos-icon.svg"/><br/>
        Videos
      </router-link>
      <router-link to="/history">
        <img src="history-icon.svg"/><br/>
        History
      </router-link>
      <router-link to="/faq">
        <img src="faq-icon.svg"/><br/>
        FAQ
      </router-link>
      <router-link to="/contributors">
        <img src="contributors-icon.svg"/><br/>
        Contributors
      </router-link>
    </div>
  </div>
</template>

<script>
import Leaves from './components/Leaves.vue';

export default {
  name: 'App',
  components: {
    Leaves,
  },
};
</script>


<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
}
#app > .page{
  flex: 1;
}
#topnav{
    display: flex;
    min-height: 80px;
    background-color: #2c3e50;
    flex: 0;
}
#topnav > #menu-icon{
    flex: 0;
    text-align: center;
    min-width: 80px;
    line-height: 80px;
    transform: rotate(90deg);
    color: white;
    font-size: 40px;
}
#topnav > #filter-by{
    color: white;
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
}
#topnav > #filter-by > div{
    color: white;
    flex: 1;
    text-align: left;
}
#topnav > #filter-by > div.label{
    line-height: 40px;
}
#topnav > #search{
    flex: 1;
    text-align: center;
    min-width: 80px;
    padding-top: 20px;
    width: 100%;
}
#topnav > #search > input{
    background-color: transparent;
    border-width: 0 0 2px 0;
    line-height: 40px;
}
#topnav > #search > input::placeholder{
    color: white;
}
#bottomnav{
    display: flex;
    min-height: 80px;
    background-color: #2c3e50;
    flex: 0;
    color: white;
}
#bottomnav > a{
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: white;
    text-decoration: none;
    padding-top: 25px;
}
</style>
