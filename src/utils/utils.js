const isEmpty = (value) => {
	return value === null || value === undefined || value === "";
}

const copyArray = (array) => {
	return array.map(item => ({ ...item }));
}

const flatGroupBy = (items, key) => {
	const copy = copyArray(items);
	const groups = Array.from(new Set(copy.map(item => item[key])));

	if (checkGroupField(items, key)) return [];

	return groups.reduce((acc, group) => {
		acc.push({ _label: group, _isGroup: true });
		return [...acc, ...copy.filter(item => item[key] === group)];
	}, []);
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