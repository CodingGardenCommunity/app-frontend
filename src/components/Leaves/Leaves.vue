<template>
  <div class="leaves">
    <Leave v-for="team in teamNames" v-bind:key="teamNames.indexOf(team)" :team="team"></Leave>
  </div>
</template>

<script>
import Leave from './Leave.vue';

export default {
  name: 'Leaves',
  components: {
    Leave,
  },
  computed: {
    teamNames() {
      return this.teams.map(team => {
        if (team === 0) return 'planning';
        if (team === 1) return 'design';
        if (team === 2) return 'frontend';
        if (team === 3) return 'backend';
        if (team === 4) return 'devops';
        return 'functional_testing';
      });
    },
  },
  props: ['teams'],
};
</script>
