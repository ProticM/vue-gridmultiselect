import { SEPARATOR } from '../constants';
import { ensureValue } from "../utils";

export default {
	hasSlot(name) {
		return !!this.$slots[name] || !!this.$scopedSlots[name];
	},
	getItemLabel(item, key = "itemLabel") {
		const label = ensureValue(this[key]);
		return label
			.split(SEPARATOR)
			.map(label => item[label.trim()])
			.join(" ")
			.trim();
	}
}