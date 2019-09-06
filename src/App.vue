<template>
  <div id="app">
    <NavBar />
    <div class="app-container">
      <router-view class="router-view" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from './components/Layout/NavBar/NavBar.vue';
import TheFooter from './components/Layout/TheFooter.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    TheFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('./assets/main.css');

/* temporary styles */
body {
  margin: 0;
  padding: 0;
  margin: 0;
  font-family: Roboto;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark_color);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.app-container {
  padding: 0 var(--width_height);
  height: calc(100% - var(--width_height));
}

.router-view {
  height: calc(100% - var(--width_height));
}
</style>
