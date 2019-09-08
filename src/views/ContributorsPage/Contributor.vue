<template>
  <div class="contributor">
    <img v-bind:src="data.attributes.image" class="profile" />
    <Leaves :teams="data.attributes.teamIDs" />
    <p>
      <i class="fa fa-github-square"></i>
      {{ data.attributes.username }}
    </p>
    <p>{{ data.attributes.name }}</p>
    <hr />
  </div>
</template>

<script>
import Leaves from '../../components/Leaves.vue';

export default {
  name: 'Contributor',
  components: {
    Leaves,
  },
  props: ['data'],
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('../../assets/main.css');

.profile {
  width: var(--width_height);
  height: var(--width_height);
  border-radius: 50%;
}
</style>
