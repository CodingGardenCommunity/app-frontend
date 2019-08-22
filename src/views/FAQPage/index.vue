<template>
  <div class="view-container">
    <FAQList />
  </div>
</template>

<script>
import FAQList from './FAQList.vue';

const FAQPage = {
  name: 'faq',
  components: {
    FAQList,
  },
};

export default FAQPage;
</script>

<style scoped>
.view-container {
  padding: 30px 0;
  background: #fafafa;
}
</style>
