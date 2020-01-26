import { wrap } from './util';

describe('searching', () => {

	it('should enable search', () => {
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});
		expect(wrapper.vm.searchable).toEqual(true);
		expect(
			wrapper.find('.gridmultiselect__searchfield-wrap').exists()
		).toEqual(true);
	});

	it('should disable search', () => {
		const wrapper = wrap({
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
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}), input = wrapper.find('.gridmultiselect__searchfield');

		input.element.value = 1;
		input.trigger('input');

		expect(wrapper.vm.searchTerm).toEqual('1');
		expect(wrapper.vm.internalItems).toEqual([{ id: 1, text: 'Item 1' }]);
	});

	it('should change input placeholder', () => {
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			searchBoxPlaceholder: 'Search items...'
		}), input = wrapper.find('.gridmultiselect__searchfield');

		expect(wrapper.vm.searchBoxPlaceholder).toEqual('Search items...');
		expect(input.element.placeholder).toBe('Search items...');
	})
})