<template>
  <div class="view-container">
    <div class="view-header">
      <h1>FAQ</h1>
    </div>
    <div class="data-list faq-data-list">
      <div v-for="(faq, index) in faqList" :key="index"
      class="data-item faq-data-item initBorder" :class="{'isClosed': !faq.isOpen}">
        <div class="faq-question" @click="toggleAccordion(index)">{{ faq.question }}</div>
        <div class="faq-answer">
          <div class="answer">
            {{ faq.answer }}
          </div>
          <!-- Do we need createdAt updatedAt on FAQ? -->
          <!-- <div class="faq-createdAt">{{ item.createdAt }}</div> |  -->
          <!-- <div class="faq-updatedAt">{{ item.updatedAt }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import fetch from 'node-fetch';

export default {
  name: 'faq',
  components: {},
  computed: {
    faqList() {
      return this.$store.state.faqData.faqList.map(faq => faq.attributes);
    },
  },
  created() {
    this.$store.dispatch('API_FaqDataRequest_ACTION');
  },

  methods: {
    // toggleAccordion(index) {

    // }
    toggleAccordion(index) {
      this.temp_______selectedFAQ = this.faqList.map(
        e => (e.question === index.question
          ? { ...e, isOpen: !e.isOpen }
          : { ...e, isOpen: false }),
      );
    },
  },
};
</script>

<style scoped>
.faq-data-list{
  display: flex;
  flex-wrap: wrap;
}

.faq-data-item{
  flex-basis: 100%;
}

@media (min-width: 630px) {
  .faq-data-item {
    flex-basis: 70%;
  }
}

.data-item, .data-item > div {
  border: none;
}

.data-item {
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #eee;
  padding: 8px;
  background: #fafafa;
}
.faq-question {
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  padding-left: 15px;

}
.faq-answer   {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
  font-size: 11px;
  margin-top: 5px;
  padding: 0px 5px;
  background: #fefefe;
}
.answer {
  padding: 10px;
  font-size: 16px;
}

/* .faq-createdAt,
.faq-updatedAt {
  display: inline-block;
  padding: 3px;
} */


.isClosed .faq-answer {
  max-height: 0px !important;
}

.initBorder {
  position: relative;
}

.initBorder:before {
  transition: opacity .1s linear, transform .5s ease-in-out;
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
