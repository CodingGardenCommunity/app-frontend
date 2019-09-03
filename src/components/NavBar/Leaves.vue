<template>
  <div class="leaves">
      <div class="leaf design-leaf"></div>
      <div class="leaf planing-leaf"></div>
      <div class="leaf testing-leaf"></div>
      <div class="leaf backend-leaf"></div>
      <div class="leaf frontend-leaf"></div>
      <div class="leaf devops-leaf"></div>
  </div>
</template>

<script>
export default {
  name: 'Leaves',
  props: {
    design: Boolean,
    planing: Boolean,
    testing: Boolean,
    backend: Boolean,
    frontend: Boolean,
    devops: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaf{
    float: left;
    width: 15px;
    height: 28px;
    margin-right: 8px;
    border-radius: 15px 0 15px 0;
    background-color: #bbb;
}
</style>
