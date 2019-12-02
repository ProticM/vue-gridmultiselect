import { shallowMount } from '@vue/test-utils';
import GridMultiselect from '@/GridMultiselect.vue';

const wrap = (propsData = {}) => {
	return shallowMount(GridMultiselect, {
		propsData: {
			...{ itemKey: 'id', itemLabel: 'text' },
			...propsData
		}
	});
};

describe('GridMultiselect.vue', () => {
	describe('value binding', () => {
		test('should work when selected items are initially set to null', () => {
			const wrapper = wrap({
				selectedItems: null,
				items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
			});
			expect(wrapper.vm.selectedItems).toEqual([]);
		})
	})
})