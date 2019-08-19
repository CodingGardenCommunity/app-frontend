<template>
  <div id="app">
    <div class="topnav" @mouseleave="closeMenu">
      <div id="menu_button" class="topnav-icon" @click="toggleMenu">
        <i class="fa fa-navicon"></i>
      </div>
      <div :class="menuOpen ? 'open' : ''" id="fixed-menu">
        <NavMenu/>
      </div>
      <div class="topnav-logo"></div>
      <div class="topnav-collapse-wrapper">
        <div class="topnav-app-name">Community App</div>
      </div>
    </div>
    <div class="app-container">
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
    };
  },
  components: {
    NavMenu,
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('./assets/css/main.css');
/* temporary styles */
.data-item{
  border: 1px solid black;
  padding: 2px;
  margin-bottom: 8px;
  font-size: 10px;
}
.data-item > div{
  border: 1px solid #DDD;
  padding: 2px;
  margin: 2px;
}
</style>
