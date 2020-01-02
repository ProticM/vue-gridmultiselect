import { mount } from "@vue/test-utils";
import GridMultiselect from '@/components/GridMultiselect.vue';

const wrap = (propsData = {}, requiredProps = { itemKey: 'id', itemLabel: 'text' }) => {
	return mount(GridMultiselect, {
		propsData: {
			...requiredProps,
			...propsData
		}
	});
};

const wrapWithOptions = (propsData = {}, options = {}, requiredProps = { itemKey: 'id', itemLabel: 'text' }) => {
	return mount(GridMultiselect, {
		propsData: {
			...requiredProps,
			...propsData
		},
		...options
	});
};

export {
	wrap,
	wrapWithOptions
}