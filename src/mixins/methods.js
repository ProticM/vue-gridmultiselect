import {
	ensureValue
} from "../utils";

export default {
	hasSlot(name) {
		return !!this.$slots[name] || !!this.$scopedSlots[name];
	},
	getItemLabel(item, key = "itemLabel") {
		const label = ensureValue(this[key]);
		return label
			.split("|")
			.map(label => item[label.trim()])
			.join(" ")
			.trim();
	},
	removeItem(index) {
		const removedItem = this.selectedItems.splice(index, 1);
		this.$emit("item-removed", removedItem);
	}
}