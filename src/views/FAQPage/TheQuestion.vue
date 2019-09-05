<template>
  <div class="faq-question" @click="toggleAccordion(question)" v-text="question" />
</template>

<script>
export default {
  name: 'TheQuestion',

  props: {
    question: String,
    toggleAccordion: Function,
  },
};
</script>

<style scoped>
.faq-question {
  cursor: pointer;
  font-size: 18px;
  padding: 0.25rem;
  padding-left: 15px;
  text-align: left;
  color: orange;
}

.isClosed .faq-question {
  color: #000;
}

.isClosed .faq-question:hover {
  color: orange;
}
</style>
