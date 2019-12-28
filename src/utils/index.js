const isEmpty = (value) => {
	return value === null || value === undefined || value === "";
}

const copyArray = (array) => {
	return array.map(item => ({ ...item }));
}

const groupBy = (array, key) => {
	return array.reduce((acc, item) => {
		(acc[item[key]] = acc[item[key]] || []).push(item);
		return acc;
	}, {})
}

const flatGroupBy = (items, key) => {

	if (checkGroupField(items, key)) return [];

	const copy = copyArray(items);
	const grouped = groupBy(copy, key),
		groups = Object.keys(grouped);
	let flatten = [];

	groups.forEach(group => {
		flatten.push({ $label: group, $isGroup: true });
		flatten = flatten.concat(grouped[group]);
	});

	return flatten;
};

const checkGroupField = (items, key) => {
	const itemWithoutGroupingField = items.find(item => isEmpty(item[key]));
	const hasItemWithoutGroupingField = !isEmpty(itemWithoutGroupingField);

	if (hasItemWithoutGroupingField) {
		console.warn(`Item ${JSON.stringify(itemWithoutGroupingField)} does not contain grouping field: ${key}`);
	}

	return hasItemWithoutGroupingField;
}

const guid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		let r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

const ensureValue = (value, index = 0) => {
	return Array.isArray(value) ?
		(value[index] || value[0]) : value;
}

const slotScopes = {
	"selected-item": "selectedItem",
	"selected-item-details": "selectedItem"
}

const getSlotScope = (name) => {
	return slotScopes[name] || null;
}

export {
	isEmpty,
	flatGroupBy,
	copyArray,
	guid,
	ensureValue,
	groupBy,
	checkGroupField,
	getSlotScope
}