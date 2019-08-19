<template>
  <div class="nav-menu">
    <div v-for="(menuItem, index) in menuData" :key="index" class="menu-item">
      <router-link :to="menuItem.route">
        <div class="icon">
          <i class="fa" :class="menuItem.faClass"></i>
        </div>
        <span>{{ menuItem.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      sidebarOpen: false,
      menuData: [
        { label: 'Videos', route: '/videos', faClass: 'fa-film' },
        { label: 'FAQ', route: '/faq', faClass: 'fa-question-circle-o' },
        { label: 'History', route: '/history', faClass: 'fa-history' },
        { label: 'Contributors', route: '/contributors', faClass: 'fa-users' },
      ],
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-menu {
  display: flex;
  flex-direction: column;
}
.nav-menu > div > a {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 20px;
  padding: 8px 8px 8px 0;
  height: 25px;
  line-height: 25px;
}
.nav-menu > div > a > .icon {
  min-width: 53px;
  text-align: center;
  font-size: 1.2em;
}
.nav-menu > div > a > span {
  text-decoration: none;
  margin-left: 8px;
}
.nav-menu > div > a {
  color: #231F20;
  background-color: #DDD;
}
.nav-menu > div > a:hover {
  color: #DDD;
  background-color: #231F20;
}
</style>
