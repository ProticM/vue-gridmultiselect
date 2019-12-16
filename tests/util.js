import { shallowMount } from "@vue/test-utils";
import GridMultiselect from '@/GridMultiselect.vue';

const wrapShallow = (propsData = {}, requiredProps = { itemKey: 'id', itemLabel: 'text' }) => {
	return shallowMount(GridMultiselect, {
		propsData: {
			...requiredProps,
			...propsData
		}
	});
};

const wrapShallowWithOptions = (propsData = {}, options = {}, requiredProps = { itemKey: 'id', itemLabel: 'text' }) => {
	return shallowMount(GridMultiselect, {
		propsData: {
			...requiredProps,
			...propsData
		},
		...options
	});
};

export {
	wrapShallow,
	wrapShallowWithOptions
}