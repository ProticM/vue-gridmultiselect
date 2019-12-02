module.exports = {
	testMatch: ['**/?(*.)(spec).js?(x)'],
	moduleFileExtensions: [
		'js',
		'vue'
	],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.jsx?$': 'babel-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	coverageDirectory: '<rootDir>/test/coverage',
	collectCoverageFrom: [
		'src/*.{js,vue}',
		'!**/node_modules/**',
		'!docs/**'
	]
}