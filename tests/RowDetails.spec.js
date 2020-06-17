import { wrap } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('row details', () => {

	it('should have row details enabled', () => {
		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);
		expect(selectedItems.vm.isRowDetailEnabled).toEqual(true);
	});

	it('should have row details opened for the selected item', () => {

		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);

		selectedItems.vm.toggleDetails(wrapper.vm.selectedItems[0]);

		expect(selectedItems.vm.selectedItems[0]).toEqual(wrapper.vm.selectedItems[0]);

		expect(
			selectedItems.findAll('.gridmultiselect__selecteditemdetails').length
		).toEqual(1);

		expect(
			selectedItems.findAll('.gridmultiselect__selecteditemdetails').at(0).exists()
		).toEqual(true);

		expect(
			selectedItems.findAll('.gridmultiselect__selecteditemdetails').at(0).text()
		).toEqual('Item 1');

		expect(
			selectedItems.vm.$data.rowDetails.length
		).toEqual(1);

		expect(
			selectedItems.vm.$data.rowDetails[0]
		).toEqual(1);
	});

	it('should have row details opened with key combination values', () => {

		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1', text2: 'Item 1.1' }],
			items: [{ id: 1, text: 'Item 1', text2: 'Item 1.1' }, { id: 2, text: 'Item 2', text2: 'Item 2.1' }],
			itemDetails: 'text|text2'
		});
		const selectedItems = wrapper.findComponent(SelectedItems);
		selectedItems.vm.toggleDetails(wrapper.vm.selectedItems[0]);

		expect(selectedItems.vm.selectedItems[0]).toEqual(wrapper.vm.selectedItems[0]);
		expect(
			selectedItems.findAll('.gridmultiselect__selecteditemdetails').at(0).text()
		).toEqual('Item 1 Item 1.1');
	});
})