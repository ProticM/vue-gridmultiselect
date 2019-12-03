import { wrapShallow } from './util';

describe('row details', () => {

	it('should have row details enabled', () => {
		const wrapper = wrapShallow({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		expect(wrapper.vm.isRowDetailEnabled).toEqual(true);
	});

	it('should have row details opened for the selected item', () => {

		const wrapper = wrapShallow({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});

		wrapper.vm.toggleDetails(wrapper.vm.selectedItems[0]);

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemdetails').length
		).toEqual(1);

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemdetails').at(0).exists()
		).toEqual(true);

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemdetails').at(0).text()
		).toEqual('Item 1');

		expect(
			wrapper.vm.$data.rowDetails.length
		).toEqual(1);

		expect(
			wrapper.vm.$data.rowDetails[0]
		).toEqual(1);
	})
})