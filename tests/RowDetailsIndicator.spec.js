import { wrapShallow } from './util';

describe('row details indicator', () => {

	it('should have row details enabled', () => {
		const wrapper = wrapShallow({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});
		expect(wrapper.vm.isRowDetailEnabled).toEqual(true);
	});

	it('should have row collapsed indicator', () => {

		const wrapper = wrapShallow({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});

		expect(
			wrapper.find('.gridmultiselect__selecteditemtext--collapsed').exists()
		).toEqual(true);

		expect(
			wrapper.find('.gridmultiselect__selecteditemtext--expanded').exists()
		).toEqual(false);
	});

	it('should have row expanded indicator', () => {

		const wrapper = wrapShallow({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		});

		wrapper.vm.toggleDetails(wrapper.vm.selectedItems[0]);

		wrapper.vm.$nextTick(() => {

			expect(
				wrapper.find('.gridmultiselect__selecteditemtext--collapsed').exists()
			).toEqual(false);

			expect(
				wrapper.find('.gridmultiselect__selecteditemtext--expanded').exists()
			).toEqual(true);
		});
	});
})