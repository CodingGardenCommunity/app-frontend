<template>
  <li class="view-container">
    <div class="view-header">
      <h1>Contributors</h1>
    </div>

    <ul class="data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item">
          <div class="faq-background"></div>
          <div class="faq-thumnail">
            <img :src="item.user_thumbnail"/>
          </div>
          <div class="faq-name">{{ item.name }}</div>
          <div class="faq-username">{{ item.name }}</div>
          <div class="faq-description">{{ item.description }}</div>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'faq',
  components: {},
  data() {
    return {
      value: '',
      dataItems: [],
    };
  },
  created() {
    fetch('https://cors-adder.joshuaferr1s.now.sh/cors/https:/api-dev.coding.garden/faq')
      .then(n => n.json())
      .then((json) => {
        console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>
