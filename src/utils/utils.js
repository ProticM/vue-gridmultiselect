const isEmpty = (value) => {
	return value === null || value === undefined || value === "";
}

const copyArray = (array) => {
	return array.map(item => ({ ...item }));
}

const flatGroupBy = (items, key) => {

	if (checkGroupField(items, key)) return [];

	const copy = copyArray(items);
	const grouped = copy.reduce((acc, item) => {
		(acc[item[key]] = acc[item[key]] || []).push(item);
		return acc;
	}, {}), groups = Object.keys(grouped);
	let flatten = [];

	groups.forEach(group => {
		flatten.push({ _label: group, _isGroup: true });
		flatten = flatten.concat(grouped[group]);
	});

	return flatten;
};

const checkGroupField = (items, key) => {
	const itemWithoutGroupingField = items.find(item => isEmpty(item[key]));
	const hasItemWithoutGroupingField = !isEmpty(itemWithoutGroupingField);

	if (hasItemWithoutGroupingField) {
		console.warn('Item '.concat(JSON.stringify(itemWithoutGroupingField))
			.concat(' doesn not contain grouping field: '.concat(key)));
	}

	return hasItemWithoutGroupingField;
}

export {
	isEmpty,
	flatGroupBy,
	copyArray
}