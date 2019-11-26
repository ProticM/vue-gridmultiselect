
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const extensions = [
	'.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.ts'
];

export default [{
	input: 'src/index.js',
	output: [{
		name: 'VueGridMultiselect',
		file: 'dist/vue-gridmultiselect.js',
		format: 'umd'
	}],
	plugins: [
		resolve({ extensions }),
		commonjs(),
		vue({ css: true }),
		babel({
			extensions: extensions,
			exclude: ['node_modules/**']
		}),
		uglify()
	]
}, {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/vue-gridmultiselect-esm.js',
			format: 'esm'
		}],
	plugins: [
		resolve({ extensions }),
		commonjs(),
		vue({ css: true }),
		babel({
			extensions: extensions,
			exclude: ['node_modules/**']
		})
	]
}];