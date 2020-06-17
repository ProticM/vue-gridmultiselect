import { wrap } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('row details indicator', () => {

	it('should have row details enabled', () => {
		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);

		expect(selectedItems.vm.isRowDetailEnabled).toEqual(true);
	});

	it('should have row collapsed indicator', () => {

		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);

		expect(
			selectedItems.find('.gridmultiselect__selecteditemtext--collapsed').exists()
		).toEqual(true);

		expect(
			selectedItems.find('.gridmultiselect__selecteditemtext--expanded').exists()
		).toEqual(false);
	});

	it('should have row expanded indicator', () => {

		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);

		selectedItems.vm.toggleDetails(wrapper.vm.selectedItems[0]);
		expect(selectedItems.vm.selectedItems[0]).toEqual(wrapper.vm.selectedItems[0]);

		wrapper.vm.$nextTick(() => {

			expect(
				selectedItems.find('.gridmultiselect__selecteditemtext--collapsed').exists()
			).toEqual(false);

			expect(
				selectedItems.find('.gridmultiselect__selecteditemtext--expanded').exists()
			).toEqual(true);
		});
	});
})