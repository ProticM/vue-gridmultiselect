import { wrap } from './util';

describe('labeling', () => {
	it('should have text property value as a label in the selected items list', () => {
		const wrapper = wrap({
			value: null,
			items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
		});

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(0).text()
		).toEqual('Item 1');

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(1).text()
		).toEqual('Item 2');
	});

	it('should have text property value as a label in the items list and the text2 property value as a value in the selected items list', () => {
		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1', text2: 'Item 1.2' }],
			items: [{ id: 1, text: 'Item 1', text2: 'Item 1.2' }, { id: 2, text: 'Item 2', text2: 'Item 2.2' }]
		}, { itemKey: 'id', itemLabel: ['text', 'text2'] });

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(0).text()
		).toEqual('Item 1');

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(1).text()
		).toEqual('Item 2');

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemtext').at(0).text()
		).toEqual('Item 1.2');
	});

	it('should have text property value as a label in the items list and the combination of text and text2 property value as a value in the selected items list', () => {
		const wrapper = wrap({
			value: [{ id: 1, text: 'Item 1', text2: 'Item 1.2' }],
			items: [{ id: 1, text: 'Item 1', text2: 'Item 1.2' }, { id: 2, text: 'Item 2', text2: 'Item 2.2' }]
		}, { itemKey: 'id', itemLabel: ['text', 'text|text2'] });

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(0).text()
		).toEqual('Item 1');

		expect(
			wrapper.findAll('.gridmultiselect__itemlabel').at(1).text()
		).toEqual('Item 2');

		expect(
			wrapper.findAll('.gridmultiselect__selecteditemtext').at(0).text()
		).toEqual('Item 1 Item 1.2');
	});
})