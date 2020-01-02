export default {
	itemLabel: {
		value: [String, Array],
		required: true
	},
	itemKey: {
		type: String,
		required: true
	},
	emptyMessage: {
		type: String,
		default: "No Data"
	},
	itemDetails: {
		type: String
	},
	groupBy: {
		type: String
	}
}