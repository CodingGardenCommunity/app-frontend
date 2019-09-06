<template>
  <div id="app">
    <div id="topnav">
      <router-link to="/menu" id="menu-icon">
        |||
      </router-link>
      <div id="filter-by">
        <div class="label">filter by:</div>
        <Leaves />
      </div>
      <div id="search">
        <input type="text" placeholder="search" />
      </div>
    </div>
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import Leaves from './components/Leaves.vue';
import TheFooter from './components/Layout/TheFooter.vue';

export default {
  name: 'App',
  components: {
    Leaves,
    TheFooter,
  },
};
</script>

<style>
body {
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
  height: 100vh;
}
#app > .page {
  flex: 1;
}
#topnav {
  display: flex;
  min-height: 80px;
  background-color: #2c3e50;
  flex: 0;
}
#topnav > #menu-icon {
  flex: 0;
  text-align: center;
  min-width: 80px;
  line-height: 80px;
  transform: rotate(90deg);
  color: white;
  font-size: 40px;
}
#topnav > #filter-by {
  color: white;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
}
#topnav > #filter-by > div {
  color: white;
  flex: 1;
  text-align: left;
}
#topnav > #filter-by > div.label {
  line-height: 40px;
}
#topnav > #search {
  flex: 1;
  text-align: center;
  min-width: 80px;
  padding-top: 20px;
  width: 100%;
}
#topnav > #search > input {
  background-color: transparent;
  border-width: 0 0 2px 0;
  line-height: 40px;
}
#topnav > #search > input::placeholder {
  color: white;
}
</style>
