<template>
  <li class="view-container">
    <div class="view-header">
      <h1>Contributors</h1>
    </div>

    <ul class="data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item">
          <div class="contributor-background"></div>
          <div class="contributor-thumnail">
            <img :src="item.user_thumbnail"/>
          </div>
          <div class="contributor-name">{{ item.name }}</div>
          <div class="contributor-username">{{ item.name }}</div>
          <div class="contributor-description">{{ item.description }}</div>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  name: 'contributors',
  components: {},
  data() {
    return {
      dataItems: [
        {
          name: 'asdf123',
          thumbnail: 'asdf.png',
          title: 'some title',
          description: 'some description',
          url: 'asdf.com',
          leaves: [0, 1, 0, 0, 1, 1],
        },
      ],
    };
  },
  created() {
    fetch('https://cors-adder.joshuaferr1s.now.sh/cors/https:/api-dev.coding.garden/contributors')
      .then(n => n.json())
      .then((json) => {
        console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>

<style>
  .contributors-thumbnail {

  }
  .contributors-name {

  }
  .contributors-username {

  }
  .contributors-description {

  }
  .contributors-background {

  }
</style>
