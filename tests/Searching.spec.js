import { wrapShallow } from './util';

describe('searching', () => {

	it('should enable search', () => {
		const wrapper = wrapShallow({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});
		expect(wrapper.vm.searchable).toEqual(true);
		expect(
			wrapper.find('.gridmultiselect__searchfield-wrap').exists()
		).toEqual(true);
	});

	it('should disable search', () => {
		const wrapper = wrapShallow({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			searchable: false
		});
		expect(wrapper.vm.searchable).toEqual(false);
		expect(
			wrapper.find('.gridmultiselect__searchfield-wrap').exists()
		).toEqual(false);
	});

	it('should find text item 1', () => {
		const wrapper = wrapShallow({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}), input = wrapper.find('.gridmultiselect__searchfield');

		input.element.value = 1;
		input.trigger('input');

		expect(wrapper.vm.searchTerm).toEqual('1');
		expect(wrapper.vm.internalItems).toEqual([{ id: 1, text: 'Item 1' }]);
	})
})