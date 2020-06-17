import { wrap } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('grouping', () => {
    it('should have grouping enabled', () => {
        const wrapper = wrap({
            value: null,
            items: [{ id: 1, text: 'Item 1', view: 'View 1' }, { id: 2, text: 'Item 2', view: 'View 2' }],
            groupBy: 'view'
        });
        const selectedItems = wrapper.findComponent(SelectedItems);

        expect(selectedItems.vm.isGroupingEnabled).toEqual(true);
    });

    it('should have two groups created with a badge in the selected item html', () => {
        const wrapper = wrap({
            value: [{ id: 1, text: 'Item 1', view: 'View 1' }],
            items: [{ id: 1, text: 'Item 1', view: 'View 1' }, { id: 2, text: 'Item 2', view: 'View 2' }],
            groupBy: 'view'
        });
        const selectedItems = wrapper.findComponent(SelectedItems);

        expect(selectedItems.vm.isGroupingEnabled).toEqual(true);
        expect(selectedItems.find('span.gridmultiselect__selecteditemgroupbadge').exists()).toBe(true);
        const groups = wrapper.vm.items.map(item => item['view']);
        expect(groups.length).toEqual(2);
    });
})