<template>
  <div class="leaf" v-bind:class="team"></div>
</template>

<script>
export default {
  props: ['team'],
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

.frontend {
  background-color: rgb(26, 103, 92);
}
.backend {
  background-color: rgb(40, 107, 179);
}
.devops {
  background-color: rgb(145, 15, 25);
}
.design {
  background-color: rgb(229, 0, 25);
}
.planning {
  background-color: rgb(248, 129, 10);
}
.functional_testing {
  background-color: rgb(247, 171, 0);
}
</style>
