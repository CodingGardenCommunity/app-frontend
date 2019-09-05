<template>
  <div class="nav-item" @click="changeRoute">
    <div class="icon">
      <i class="fa" :class="this.$props.item.faClass"></i>
    </div>
    <span class="nav-text">{{ this.$props.item.label }}</span>
  </div>
</template>

<script>
export default {
  name: 'NavMenuItem',
  methods: {
    changeRoute() {
      return this.$router.push(this.$props.item.route);
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 20px;
  padding: 8px 8px 8px 0;
  height: 25px;
  line-height: 25px;
}
.icon {
  min-width: 53px;
  text-align: center;
  font-size: 1.2em;
}
.nav-text {
  text-decoration: none;
  margin-left: 8px;
}
.nav-item {
  color: #231f20;
  background-color: #ddd;
}
.nav-item:hover {
  color: #ddd;
  background-color: #231f20;
}
</style>
