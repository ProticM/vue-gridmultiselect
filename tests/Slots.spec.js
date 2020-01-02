import { wrapWithOptions } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('slots', () => {
	it('should have selected items footer slot', () => {

		const wrapper = wrapWithOptions({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			slots: {
				'selected-items-footer': "<div class=\"footer-slot\">Footer slot</div>"
			}
		});
		const selectedItems = wrapper.find(SelectedItems);

		const slot = selectedItems.find("div.footer-slot");
		expect(slot.exists()).toBe(true);
	});

	it('should have items footer slot', () => {

		const wrapper = wrapWithOptions({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			slots: {
				'items-footer': "<div class=\"items-footer-slot\">Footer slot</div>"
			}
		});

		const slotWrapper = wrapper.find("li.gridmultiselect__itemsfooter");
		expect(slotWrapper.exists()).toBe(true);
		const slot = slotWrapper.find("div.items-footer-slot");
		expect(slot.exists()).toBe(true);
		expect(slot.text()).toBe('Footer slot');
	});

	it('should have selected item scoped slot', () => {

		const wrapper = wrapWithOptions({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		}, {
			scopedSlots: {
				'selected-item': `<template slot-scope="{selectedItem}"><span>{{selectedItem.text}}</span></template>`
			}
		});
		const selectedItems = wrapper.find(SelectedItems);

		const text = selectedItems.find("div.gridmultiselect__selecteditemtext");
		const slot = text.find('span');
		expect(slot.exists()).toBe(true);
		expect(slot.text()).toBe('Item 1');
	});

	it('should have item scoped slot', () => {

		const wrapper = wrapWithOptions({
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

	it('should have row details slot', () => {
		const wrapper = wrapWithOptions({
			value: [{ id: 1, text: 'Item 1' }],
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			itemDetails: 'text'
		}, {
			scopedSlots: {
				'selected-item-details': `<template slot-scope="{selectedItem}"><span>{{selectedItem.text}}</span></template>`
			}
		});
		const selectedItems = wrapper.find(SelectedItems);

		expect(selectedItems.vm.isRowDetailEnabled).toEqual(true);

		selectedItems.vm.toggleDetails(wrapper.vm.selectedItems[0]);
		expect(selectedItems.vm.selectedItems[0]).toEqual(wrapper.vm.selectedItems[0]);
		const details = selectedItems.findAll('.gridmultiselect__selecteditemdetails');

		expect(details.length).toEqual(1);
		const detailsSlot = details.at(0).find('span');

		expect(detailsSlot.exists()).toBe(true);
		expect(detailsSlot.text()).toBe('Item 1');
	});
})