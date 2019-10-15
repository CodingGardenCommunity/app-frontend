const FAQsModule = {
  namespaced: true,
  state: {
    FAQs: [],
  },

  mutations: {
    ADD_FAQS(state, FAQs) {
      state.FAQs = FAQs;
    },
  },

  actions: {
    addFAQsAction(context) {
      fetch('https://api-dev.codinggarden.community/faqs')
        .then(n => n.json())
        .then(json => {
          const dataItems = json.map(n => ({
            ...n.attributes,
            isOpen: false,
          }));
          context.commit('ADD_FAQS', dataItems);
        });
    },
  },
};

export default FAQsModule;
