import { shallowMount } from '@vue/test-utils';
import Contributors from '@/views/Contributors.vue';

describe('Contributors.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Contributors, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
