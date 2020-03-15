import {mount} from '@vue/test-utils';
import PopperVue from './popper-vue.vue';

describe('Given PopperVue component', () => {
  const component = mount(PopperVue);
  it('should mount and exist', () => {
    expect(component.exists()).toBeTruthy();
  });
  describe('When options are modified', () => {
    it('should still work', () => {
      component.setProps({options: {placement: 'foo'}});
      expect(component.exists()).toBe(true);
    });
  });
});
