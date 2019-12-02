import { shallowMount } from '@vue/test-utils';
import GridMultiselect from '@/GridMultiselect.vue';

describe('GridMultiselect.vue', () => {
	describe('value binding', () => {
		test('should work when selected items are initially set to null', () => {
			const wrapper = shallowMount(GridMultiselect, {
				propsData: {
					itemKey: 'id',
					itemLabel: 'text',
					selectedItems: null,
					items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
				}
			})
			expect(wrapper.vm.selectedItems).toEqual([]);
		})
	})
})