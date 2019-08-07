<template>
  <div class="view-container">
    <div class="view-header">
      <h1>Videos</h1>
    </div>
    <div class="data-list video-data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item video-data-item">
        <div class="video-type">{{ item.type }}</div>
        <div class="video-name">{{ item.name }}</div>
        <div class="video-videoID">{{ item.videoID }}</div>
        <div class="video-date">{{ item.date }}</div>
        <div class="video-description">{{ item.description }}</div>
        <div class="video-url">{{ item.url }}</div>
        <div class="video-thumbnail">{{ item.thumbnail }}</div>
        <div class="video-createdAt">{{ item.createdAt }}</div>
        <div class="video-updatedAt">{{ item.updatedAt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from 'node-fetch';

export default {
  name: 'Video',
  components: {},
  data() {
    return {
      dataItems: [],
    };
  },
  created() {
    fetch('http://kyojingames.com:3005/video')
      .then(n => n.json())
      .then((json) => {
        //  console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>

<style scoped>

</style>
