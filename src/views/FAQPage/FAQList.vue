<template>
  <ul class="data-list faq-data-list">
    <li
      :class="{ isClosed: !item.isOpen }"
      :key="index"
      class="data-item faq-data-item initBorder"
      v-for="(item, index) in dataItems"
    >
      <TheQuestion :question="item.question" :toggleAccordion="toggleAccordion" />
      <TheAnswer :answer="item.answer" />
    </li>
  </ul>
</template>

<script>
import fetch from 'node-fetch';
import TheQuestion from './TheQuestion.vue';
import TheAnswer from './TheAnswer.vue';

export default {
  name: 'FAQList',
  components: {
    TheQuestion,
    TheAnswer,
  },
  data() {
    return {
      dataItems: [],
    };
  },

  props: {
    question: String,
    answer: String,
  },

  created() {
    fetch('https://api-dev.coding.garden/faq')
      .then(n => n.json())
      .then(json => {
        this.dataItems = json.map(n => ({
          ...n.attributes,
          isOpen: false,
        }));
      });
  },

  methods: {
    toggleAccordion(question) {
      this.dataItems = this.dataItems.map(e => {
        if (e.question === question) {
          return { ...e, isOpen: !e.isOpen };
        }
        return { ...e, isOpen: false };
      });
    },
  },
};
</script>

<style scoped>
.faq-data-list {
  display: flex;
  flex-wrap: wrap;
}
.faq-data-item {
  flex-basis: 100%;
}
@media (min-width: 630px) {
  .faq-data-item {
    flex-basis: 70%;
  }
}
.data-item,
.data-item > div {
  border: none;
}
.data-item {
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #eee;
  padding: 12px;
  background: #fff;
  box-shadow: 0 0 8px -5px #000;
  list-style: none;
}

.initBorder {
  position: relative;
}
.initBorder:before {
  transition: opacity 0.1s linear, transform 0.5s ease-in-out;
  position: absolute;
  border-bottom: 1px solid currentColor;
  content: '';
  width: 100%;
  left: 0;
  bottom: -1px;
}
.initBorder:not(:hover)::before {
  transform: scaleX(0);
  opacity: 0;
}
</style>
