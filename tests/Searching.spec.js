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
	})
})