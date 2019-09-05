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
@import url('../../../assets/main.css');

.topnav {
  background-color: var(--light_color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: var(--width_height);
  color: var(--grey_color);
}

.topnav-icon {
  min-width: var(--width_height);
  line-height: var(--width_height);
  text-align: center;
  font-size: 1.6rem;
}

.topnav-icon:hover {
  cursor: pointer;
  background-color: var(--dark_color);
  color: var(--light_color);
}
.topnav-logo {
  min-width: var(--width_height);
  line-height: var(--width_height);
  text-align: center;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/373280/logo.svg) 0px center no-repeat;
  background-size: 2.12903rem;
}

.topnav-collapse-wrapper {
  line-height: var(--width_height);
  font-size: 0.96rem;
  margin: 0;
  white-space: nowrap;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.topnav-app-name {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: var(--dark_color);
  font-size: 1.2em;
}

.topnav-filter-label {
  min-width: 20%;
  line-height: var(--width_height);
  text-align: right;
}

.topnav-filter-label:before {
  color: var(--grey_color);
  content: 'filter by:';
  font-size: 0.72rem;
}

#fixed-menu {
  display: none;
  position: fixed;
  background-color: var(--light_color);
  top: var(--width_height);
  left: 0;
  z-index: 1000;
}

#fixed-menu.open {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
