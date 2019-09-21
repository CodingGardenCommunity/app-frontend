<template>
  <div class="topnav" @mouseleave="closeMenu">
    <div
      id="menu_button"
      class="topnav-icon"
      @click="toggleMenu"
    >
      <i class="fa fa-navicon"></i>
    </div>
    <transition name="slide">
      <NavMenu v-if="menuOpen" id="fixed-menu" />
    </transition>
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
  background-color: var(--medium_jungle_green);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: var(--width_height);
  color: var(--green_sheen);
}

.topnav-icon {
  min-width: var(--width_height);
  line-height: var(--width_height);
  text-align: center;
  font-size: 1.6rem;
}

.topnav-icon:hover {
  cursor: pointer;
  color: var(--medium_jungle_green);
  background-color: var(--green_sheen);
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
  font-size: 1.2em;
}

.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  position: absolute;
}

.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
#fixed-menu {
  position: fixed;
  top: var(--width_height);
  left: 0;
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: var(--medium_jungle_green);
}
</style>
