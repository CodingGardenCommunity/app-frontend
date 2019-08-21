<template>
  <div class="view-container">
    <div class="view-header">
      <h1>Videos</h1>
    </div>
    <ul class="data-list video--list">
      <li v-for="(video, index) in videos" :key="index" class="data-item video--item">
        <div class="video--name">{{ video.name }}</div>
        <div class="video--videoID">{{ video.videoID }}</div>
        <div class="video--date">{{ video.date }}</div>
        <div class="video--description">{{ video.description }}</div>
        <div class="video--url">{{ video.url }}</div>
        <div class="video--thumbnail">{{ video.thumbnail }}</div>
        <div class="video--createdAt">{{ video.createdAt }}</div>
        <div class="video--updatedAt">{{ video.updatedAt }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import fetch from 'node-fetch';

export default {
  name: 'Video',
  components: {},
  computed: {
    videos() {
      return this.$store.state.videosData.videoList.map(video => video.attributes);
    },
  },
  created() {
    this.$store.dispatch('API_VideosDataRequest_ACTION');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
