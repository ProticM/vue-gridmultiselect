import { wrap } from './util';
import SelectedItems from '@/components/SelectedItems';

describe('view split', () => {
    it('should have view splitting enabled', () => {
        const wrapper = wrap({
            value: [{ id: 1, text: 'Item 1', view: 'View 1' }],
            items: [{ id: 1, text: 'Item 1', view: 'View 1' }, { id: 2, text: 'Item 2', view: 'View 2' }],
            splitBy: 'view'
        });
        const selectedItems = wrapper.findComponent(SelectedItems);

        expect(selectedItems.vm.isSplitViewEnabled).toEqual(true);
    });

    it('should have two views created', () => {
        const wrapper = wrap({
            value: [{ id: 1, text: 'Item 1', view: 'View 1' }, { id: 2, text: 'Item 2', view: 'View 2' }],
            items: [{ id: 1, text: 'Item 1', view: 'View 1' }, { id: 2, text: 'Item 2', view: 'View 2' }],
            splitBy: 'view'
        });

        expect(wrapper.vm.isSplitViewEnabled).toEqual(true);
        expect(Object.keys(wrapper.vm.views).length).toEqual(2);
        expect(wrapper.find('div.gridmultiselect_splitviewcontainer').exists()).toBe(true);
        const views = wrapper.findAll('div.gridmultiselect_splitview');
        expect(views.length).toEqual(2);
    });
})