<template>
  <div class="nav-menu">
    <div v-for="(menuItem, index) in menuData" :key="index" class="menu-item">
      <NavMenuItem :item="menuItem" />
    </div>
  </div>
</template>

<script>
import NavMenuItem from './NavMenuItem.vue';

export default {
  name: 'NavMenu',
  components: {
    NavMenuItem,
  },
  data() {
    return {
      menuData: [
        { label: 'Videos', route: '/videos', faClass: 'fa-film' },
        { label: 'FAQ', route: '/faq', faClass: 'fa-question-circle-o' },
        { label: 'History', route: '/history', faClass: 'fa-history' },
        { label: 'Contributors', route: '/contributors', faClass: 'fa-users' },
      ],
    };
  },
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
