module.exports = {
	testMatch: ['**/?(*.)(spec).js?(x)'],
	moduleFileExtensions: [
		'js',
		'vue'
	],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.js$': 'babel-jest'
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