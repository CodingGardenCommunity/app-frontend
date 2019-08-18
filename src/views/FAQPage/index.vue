<template>
  <div class="view-container">
    <div class="data-list faq-data-list">
      <div
        v-for="(item, index) in dataItems"
        :key="index"
        class="data-item faq-data-item initBorder"
        :class="{'isClosed': !item.isOpen}"
      >
        <FAQ-Item
          v-bind:question="item.question"
          v-bind:answer="item.answer"
          v-bind:toggleAccordion="toggleAccordion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fetch from 'node-fetch';
// eslint-disable-next-line import/extensions
import FAQItem from './FAQItem';

const FAQPage = {
  name: 'faq',
  components: {
    FAQItem,
  },
  data() {
    return {
      dataItems: [],
    };
  },
  created() {
    fetch('http://kyojingames.com:3005/faq')
      .then(n => n.json())
      .then((json) => {
        this.dataItems = json.map(n => ({
          ...n.attributes,
          isOpen: false,
        }));
      });
  },
  methods: {
    toggleAccordion(question) {
      this.dataItems = this.dataItems.map((e) => {
        if (e.question === question) {
          return { ...e, isOpen: !e.isOpen };
        }
        return { ...e, isOpen: false };
      });
    },
  },
};

export default FAQPage;
</script>

<style scoped>
.view-container {
  padding: 30px 0;
  background: #fafafa;
}
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
