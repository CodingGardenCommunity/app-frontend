<template>
  <div id="app">
    <NavBar />
    <div class="app-container">
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
/* temporary styles */
.app-container {
  padding: 0 53px;
  height: calc(100% - 53px);
}

.app-container > div {
  height: calc(100% - 53px);
}
</style>
