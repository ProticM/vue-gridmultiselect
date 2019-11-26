
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default [{
	input: 'src/index.js',
	output: [{
		name: 'VueGridMultiselect',
		file: 'dist/vue-multiselect.js',
		format: 'umd'
	}],
	plugins: [
		commonjs(),
		resolve(),
		vue({ css: true }),
		babel({
			extensions: ['.js', '.vue'],
			exclude: ['node_modules/**'],
			presets: ['@babel/preset-env']
		}),
		uglify()
	]
}, {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/vue-multiselect-esm.js',
			format: 'esm'
		}],
	plugins: [
		commonjs(),
		resolve(),
		vue({ css: true }),
		babel({
			extensions: ['.js', '.vue'],
			exclude: ['node_modules/**'],
			presets: ['@babel/preset-env']
		})
	]
}];