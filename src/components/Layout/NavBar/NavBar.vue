<template>
  <div class="topnav" @mouseleave="closeMenu">
    <div id="menu_button" class="topnav-icon" @click="toggleMenu">
      <i class="fa fa-navicon"></i>
    </div>
    <div :class="menuOpen ? 'open' : ''" id="fixed-menu">
      <NavMenu />
    </div>
    <div class="topnav-logo"></div>
    <div class="topnav-collapse-wrapper">
      <div class="topnav-app-name">Community App</div>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
  components: {
    NavMenu,
  },
};
</script>

<style scoped>
.topnav {
  background-color: #ddd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 53px;
  color: #777;
}

.topnav > .topnav-icon {
  min-width: 53px;
  line-height: 53px;
  text-align: center;
  font-size: 2em;
}

.topnav > .topnav-icon:hover {
  cursor: pointer;
  background-color: #231f20;
  color: #ddd;
}

.topnav > .topnav-logo {
  min-width: 53px;
  line-height: 53px;
  text-align: center;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/373280/logo.svg) 0px center no-repeat;
  background-size: 42.5802px;
}

.topnav > .topnav-collapse-wrapper {
  line-height: 53px;
  font-size: 1.2em;
  margin: 0;
  white-space: nowrap;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.topnav > .topnav-collapse-wrapper > .topnav-app-name {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #231f20;
  font-size: 1.2em;
}

.topnav > .topnav-collapse-wrapper > .topnav-filter-label {
  min-width: 20%;
  line-height: 53px;
  text-align: right;
}

.topnav > .topnav-collapse-wrapper > .topnav-filter-label:before {
  color: #777;
  content: 'filter by:';
  font-size: 0.9em;
}

.topnav > .topnav-collapse-wrapper > .topnav-filter-content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 53px;
  text-align: left;
  padding-left: 16px;
}

.topnav > .topnav-collapse-wrapper > .topnav-filter-content > i:before {
  font-size: 0.9em;
}

.topnav > .topnav-circle-icon {
  min-width: 53px;
  line-height: 53px;
  text-align: center;
  font-size: 1.7em;
}

.topnav > .topnav-settings-icon {
  font-size: 1.7em;
  min-width: 53px;
  line-height: 53px;
  text-align: center;
}

#fixed-menu {
  display: none;
  position: fixed;
  background-color: #ddd;
  top: 53px;
  left: 0;
  z-index: 1000;
}

#fixed-menu.open {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
