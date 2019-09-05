<template>
  <div class="faq-answer">
    <div class="answer" v-text="answer" />
  </div>
</template>

<script>
export default {
  name: 'TheAnswer',

  props: {
    answer: String,
  },
};
</script>

<style scoped>
.faq-answer {
  padding: 0;
  max-height: 15em;
  overflow: hidden;
  transition: 0.3s ease all;
  font-size: 11px;
  margin-top: 5px;
  padding: 0px 5px;
  background: #fefefe;
  text-align: left;
}
.answer {
  padding: 10px;
  font-size: 16px;
}
.isClosed .faq-answer {
  max-height: 0px;
}
</style>
