import { wrapShallow } from './util';

describe('value binding', () => {
	it('should work when selected items are initially set to null', () => {
		const wrapper = wrapShallow({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});
		expect(wrapper.vm.selectedItems).toEqual([]);
	})
})