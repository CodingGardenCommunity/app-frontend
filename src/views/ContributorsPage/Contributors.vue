<template>
  <div>
    Contributors page
    <ContributorsList />
  </div>
</template>

<script>
import ContributorsList from './ContributorList.vue';

export default {
  name: 'contributors',
  components: {
    ContributorsList,
  },
};
</script>
