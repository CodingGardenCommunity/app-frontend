import Vue from 'vue';
import Vuex from 'vuex';
import FAQs from './modules/FAQs.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    FAQs,
  },
});
