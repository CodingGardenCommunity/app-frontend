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
@import url('../../../assets/main.css');

.nav-item {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 1rem;
  padding: var(--spacing) var(--spacing) var(--spacing) 0;
  height: 25px;
  line-height: 25px;
}
.icon {
  min-width: var(--width_height);
  text-align: center;
  font-size: 1.2em;
}
.nav-text {
  text-decoration: none;
  margin-left: var(--spacing);
}
.nav-item {
  background-color: var(--medium_jungle_green);
}
.nav-item:hover {
  color: var(--medium_jungle_green);
  background-color: var(--green_sheen);
}
</style>
