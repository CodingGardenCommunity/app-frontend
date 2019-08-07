<template>
  <div class="menu">
    <div v-for="(item, index) in menuData" :key="index" class="menu-item">
      <router-link :to="item.route">
        <div class="icon">
          <i class="fa" :class="item.faClass"></i>
        </div>
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
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
.menu {
  display: flex;
  flex-direction: column;
}
.menu > div > a {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 20px;
  padding: 8px 8px 8px 0;
  height: 25px;
  line-height: 25px;
}
.menu > div > a > .icon {
  min-width: 53px;
  text-align: center;
  font-size: 1.2em;
}
.menu > div > a > span {
  text-decoration: none;
  margin-left: 8px;
}
</style>
