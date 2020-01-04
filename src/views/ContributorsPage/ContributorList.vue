<template>
  <div class="contributors">
    <div class="contributor" v-for="contributor in contributors" :key="contributor.id">
      <Contributor :data="contributor" />
    </div>
  </div>
</template>

<script>
import Contributor from './Contributor.vue';

export default {
  name: 'ContributorList',
  data() {
    return {
      contributors: [],
    };
  },
  created() {
    return (
      fetch('https://api-dev.codinggarden.community/contributors')
        .then(res => res.json())
        // eslint-disable-next-line
        .then(json => (this.contributors = json))
    );
  },
  components: {
    Contributor,
  },
};
</script>

<style scoped></style>
