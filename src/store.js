import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const tempEndpoints = 'http://kyojingames.com:3005';

export default new Vuex.Store({
  state: {
    videosData: {
      videoList: [],
    },
    faqData: {
      faqList: [],
    },
    historyData: {
      historyList: [],
    },
    contributorsData: {
      contributorsList: [],
    },
  },
  mutations: {
    API_VideosDataRequest_MUTA(state, payload) {
      state.videosData.videoList.push(...payload);
    },
    API_FaqDataRequest_MUTA(state, payload) {
      state.faqData.faqList.push(...payload);
    },
    API_HistoryDataRequest_MUTA(state, payload) {
      state.historyData.historyList.push(...payload);
    },
    API_ContributorsDataRequest_MUTA(state, payload) {
      state.contributorsData.contributorsList.push(...payload);
    },
  },
  actions: {
    async API_VideosDataRequest_ACTION(context) {
      const response = await fetch(`${tempEndpoints}/video`);
      const videosData = await response.json();
      context.commit('API_VideosDataRequest_MUTA', videosData);
    },
    async API_FaqDataRequest_ACTION(context) {
      const response = await fetch(`${tempEndpoints}/faq`);
      const faqData = await response.json();
      context.commit('API_FaqDataRequest_MUTA', faqData);
    },
    async API_HistoryDataRequest_ACTION(context) {
      const response = await fetch(`${tempEndpoints}/history`);
      const historyData = await response.json();
      context.commit('API_HistoryDataRequest_MUTA', historyData);
    },
    async API_ContributorsDataRequest_ACTION(context) {
      const response = await fetch(`${tempEndpoints}/contributors`);
      const contributorsData = await response.json();
      context.commit('API_ContributorsDataRequest_MUTA', contributorsData);
    },
  },
});
