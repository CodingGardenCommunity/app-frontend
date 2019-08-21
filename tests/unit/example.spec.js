import { shallowMount } from '@vue/test-utils';
import Contributors from '@/views/Contributors.vue';
import FAQ from '@/views/FAQ.vue';
import History from '@/views/History.vue';
// import Home from '@/views/Home.vue';
import Videos from '@/views/Videos.vue';


describe('Contributors.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Contributors';
    const wrapper = shallowMount(Contributors, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('FAQ.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'FAQ';
    const wrapper = shallowMount(FAQ, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('History.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'History';
    const wrapper = shallowMount(History, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// describe('Home.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'Home';
//     const wrapper = shallowMount(Home, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe('Videos.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Videos';
    const wrapper = shallowMount(Videos, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
