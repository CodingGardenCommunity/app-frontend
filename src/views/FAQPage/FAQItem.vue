<template>
  <div>
    <div class="faq-question" @click="toggleAccordion(question)" v-text="question" />
    <div class="faq-answer">
      <div class="answer" v-text="answer" />
    </div>
  </div>
</template>

<script>
const FAQItem = {
  name: 'faqitem',

  props: {
    question: String,
    answer: String,
    toggleAccordion: Function,
  },
};

export default FAQItem;
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
.isClosed .faq-answer {
  max-height: 0px !important;
}
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
</style>
