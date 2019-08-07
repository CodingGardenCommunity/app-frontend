<template>
  <li class="view-container">
    <div class="view-header">
      <h1>Videos</h1>
    </div>

    <ul class="data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item">
          <div class="videos-background"></div>
          <div class="videos-thumnail">
            <img :src="item.user_thumbnail"/>
          </div>
          <div class="videos-name">{{ item.name }}</div>
          <div class="videos-username">{{ item.name }}</div>
          <div class="videos-description">{{ item.description }}</div>
          <hr/>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'videos',
  components: {},
  data() {
    return {
      value: '',
      dataItems: [
        {
          name: 'asdf123',
          thumbnail: 'asdf.png',
          title: 'some title',
          description: 'some description',
          url: 'asdf.com',
          leaves: '',
        },
      ],
    };
  },
  created() {
    fetch('https://cors-adder.joshuaferr1s.now.sh/cors/https:/api-dev.coding.garden/videos')
      .then(n => n.json())
      .then((json) => {
        console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>

<style scoped>

</style>
