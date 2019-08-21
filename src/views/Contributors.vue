<template>
  <div class="view-container">
    <div class="view-header">
      <h1>Contributors</h1>
    </div>
    <div class="data-list contributors-data-list">
      <div
        v-for="(contributor, index) in contributorsList"
        :key="index"
        class="data-item contributors-data-item"
      >
        <div class="contributors-background"></div>
        <div class="contributors-username">{{ contributor.username }}</div>
        <div class="contributors-name">{{ contributor.name }}</div>
        <div class="contributors-image"><img :src="contributor.image"/></div>
        <div class="contributors-teamIds">
          <Leaves :options="contributor.teamIds"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import fetch from 'node-fetch';
import Leaves from '../components/Leaves.vue';

export default {
  name: 'Contributors',
  components: {
    Leaves,
  },
  computed: {
    contributorsList() {
      return this.$store.state.contributorsData.contributorsList.map(
        contributor => contributor.attributes,
      );
    },
  },
  created() {
    this.$store.dispatch('API_ContributorsDataRequest_ACTION');
  },
};
</script>

<style scoped>
.contributors-data-item div{
  border: 0;
}
.contributors-image{
  top: 35px;
  left: 30px;
}
.contributors-background{
  width: 180px;
  height: 90px;
}
.contributors-username{
  left: 132px;
  top: 86px;
}
.contributors-name{
  left: 130px;
  top: 104px;
}
.contributors-teamIds{
  left: 130px;
  top: 40px;
  border: 0;
}
.contributors-data-list{
  display: flex;
  flex-wrap: wrap;
  border: 0;
}
.contributors-data-item{
  position: relative;
  min-width: 350px;
  height: 120px;
  border: 0;
}
.contributors-data-item > div{
  position: absolute;
}
.contributors-background{
  border-radius: 0 120px 0 120px;
  border: 0;
  background-color: #EEEEEE;
  position: relative;
  top: 36px;
  left: 0px;
}
.contributors-username{
  font-size: 13px;
  border: 0;
}
.contributors-username:before{
  content: " ";
  font-family: FontAwesome;
}
.contributors-name{
  font-size: 20px;
  font-weight: bold;
  border: 0;
}
.contributors-image{
  height: 90px;
  width: 90px;
  border-radius: 90px;
  overflow: hidden;
}
.contributors-image > img {
  width: 100px;
  height: 100px;
  position: relative;
  top: -5px;
  left: -5px;
}
</style>
