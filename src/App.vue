<template>
  <div id="app">
    <div id="topnav">
      <div id="menu-icon" @click="toggleMenu">
        |||
      </div>
      <div id="filter-by">
        <div class="label">filter by:</div>
        <Leaves/>
      </div>
      <div id="search">
        <input type="text" placeholder="search"/>
      </div>
    </div>
    <div class="app-container">
      <div :class="sidebarOpen ? 'open' : ''" class="side-bar">
        <ul class="side-bar-menu"></ul>
      </div>
      <router-view class="router-view"/>
    </div>
    <!-- <div id="bottomnav">
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
    </div> -->
  </div>
</template>

<script>
import Leaves from './components/Leaves.vue';

export default {
  name: 'App',
  data() {
    return {
      sidebarOpen: false,
      menuData: [
        { label: 'videos', asdf: 'videos-icon.svg' },
        { label: 'history', asdf: 'history-icon.svg' },
        { label: 'FAQ', asdf: 'faq-icon.svg' },
        { label: 'contributors', asdf: 'contributors-icon.svg' },
      ],
    };
  },
  components: {
    Leaves,
  },
  methods: {
    toggleMenu() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>


<style>
@import url('./assets/css/main.css');
</style>
