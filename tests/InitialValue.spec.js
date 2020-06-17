import { wrap } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('value binding', () => {
	it('should work when selected items are initially set to null', () => {
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});
		const selectedItems = wrapper.findComponent(SelectedItems);

		expect(wrapper.vm.selectedItems).toEqual([]);
		expect(selectedItems.vm.selectedItems).toEqual([]);
	});

	it('should preselect initial value', () => {
		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});

		expect(wrapper.vm.selectedItems).toEqual([{ id: 1, text: 'Item 1' }]);

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemtext').at(0).text()
		).toEqual('Item 1');
	});
})