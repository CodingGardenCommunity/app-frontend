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
/* temporary styles */
body {
  margin: 0;
  padding: 0;
  margin: 0;
  font-family: Roboto;
}

.app-container {
  padding: 0 53px;
  height: calc(100% - 53px);
}

.app-container > div {
  height: calc(100% - 53px);
}
</style>
