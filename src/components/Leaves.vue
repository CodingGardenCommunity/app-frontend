<template>
  <div class="leaves">
    <div class="leaf" v-bind:class="{design: design}"></div>
    <div class="leaf" v-bind:class="planning"></div>
    <div class="leaf" v-bind:class="testing"></div>
    <div class="leaf" v-bind:class="backend"></div>
    <div class="leaf" v-bind:class="frontend"></div>
    <div class="leaf" v-bind:class="devops"></div>
  </div>
</template>

<script>
export default {
  name: 'Leaves',
  data() {
    return {
      design: true,
      planning: false,
      testing: false,
      backend: false,
      frontend: false,
      devops: false,
    };
  },
  props: ['teams'],
};
</script>

<style scoped>
.leaf {
  float: left;
  width: 15px;
  height: 28px;
  margin-right: 8px;
  border-radius: 15px 0 15px 0;
  background-color: #bbb;
}

.design {
  color: rgb(26, 103, 92);
}
</style>
