import { wrapShallowWithOptions } from './util';

describe('slots', () => {
	it('should have selected items footer slot', () => {

		const wrapper = wrapShallowWithOptions({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			slots: {
				'selected-items-footer': "<div class=\"footer-slot\">Footer slot</div>"
			}
		});

		const slot = wrapper.find("div.footer-slot");
		expect(slot.exists()).toBe(true);
	});
})