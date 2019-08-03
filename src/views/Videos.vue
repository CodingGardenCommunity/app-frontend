<template>
  <div class="view-container">
    <div class="view-header">
      <h1>Videos</h1>
    </div>
    <ul class="data-list">
      <li v-for="(item, index) in dataItems" :key="index" class="data-item">

        <div class="video-item">
          {{ item.name }}
        </div>
      </li>
    </ul>
  </div>
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
    fetch('https://cors-adder.joshuaferr1s.now.sh/cors/https:/api-dev.coding.garden/video')
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
