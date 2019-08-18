<template>
  <Fragment>
    <div class="faq-question" @click="() => toggleAccordion(question)">{{ question }}</div>
    <div class="faq-answer">
      <div class="answer">{{ answer }}</div>
    </div>
  </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment';

const FAQItem = {
  name: 'faqitem',
  components: {
    Fragment,
  },

  props: ['question', 'answer', 'toggleAccordion'],
};

export default FAQItem;
</script>

<style scoped>
.faq-question {
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
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
