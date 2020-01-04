<template>
  <div class="contributor">
    <img v-bind:src="data.attributes.image" class="profile" />
    <span>{{ data.attributes.name }}</span>
    <Leaves :teams="data.attributes.teamIds" />
    <br />
    <p>
      <a v-bind:href="`https://github.com/${data.attributes.username}`">
        <i class="fa fa-github-square"></i>
        <span>{{ data.attributes.username }}</span>
      </a>
    </p>
    <hr />
  </div>
</template>

<script>
import Leaves from '../../components/Leaves/Leaves.vue';

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

a {
  color: black;
  text-decoration: none;
}
</style>
