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

	it('should have selected item scoped slot', () => {

		const wrapper = wrapShallowWithOptions({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			scopedSlots: {
				'selected-item': `<template slot-scope="{selectedItem}"><span>{{selectedItem.text}}</span></template>`
			}
		});

		const text = wrapper.find("div.gridmultiselect__selecteditemtext");
		const slot = text.find('span');
		expect(slot.exists()).toBe(true);
		expect(slot.text()).toBe('Item 1');
	});

	it('should have item scoped slot', () => {

		const wrapper = wrapShallowWithOptions({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			scopedSlots: {
				'item': `<template slot-scope="{item}"><span>{{item.text}}</span></template>`
			}
		});

		const items = wrapper.findAll("span.gridmultiselect__itemtext");
		expect(items.length).toBe(2);

		let slot = items.at(0).find('span');
		expect(slot.exists()).toBe(true);
		expect(slot.text()).toBe('Item 1');

		slot = items.at(1).find('span');
		expect(slot.exists()).toBe(true);
		expect(slot.text()).toBe('Item 2');
	});
})