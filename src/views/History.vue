<template>
  <li class="view-container">
    <div class="view-header">
      <h1>History</h1>
    </div>

    <ul class="data-list">
      <div v-for="(item, index) in dataItems" :key="index" class="data-item">
          <div class="history-thumnail">
            <img :src="item.user_thumbnail"/>
          </div>
          <div class="history-type">{{ item.type }}</div>
          <div class="history-name">{{ item.name }}</div>
          <div class="history-date">{{ item.date }}</div>
          <div class="history-description">{{ item.description }}</div>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'history',
  components: {},
  data() {
    return {
      value: '',
      dataItems: [],
    };
  },
  created() {
    fetch('https://cors-adder.joshuaferr1s.now.sh/cors/https:/api-dev.coding.garden/history')
      .then(n => n.json())
      .then((json) => {
        console.log(json);
        this.dataItems = json.map(n => n.attributes);
      });
  },
};
</script>
