import { wrap } from './util';

describe('custom heading', () => {
	it('should set the custom component title', () => {
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			title: 'Test Title'
		});
		expect(wrapper.vm.title).toEqual('Test Title');
	})
})