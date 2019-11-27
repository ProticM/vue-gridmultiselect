
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import css from 'rollup-plugin-css-only'

const extensions = [
	'.js', '.vue'
];

const plugins = [
	resolve({ extensions }),
	commonjs(),
	css({ output: 'dist/vue-gridmultiselect.css' }),
	vue({ css: false, compileTemplate: true, template: { isProduction: true } }),
	babel({
		extensions: extensions,
		exclude: ['node_modules/**']
	})
];

const input = 'src/index.js';
const getOutput = (format, isMin) => {
	const isUMD = format === 'umd';
	return {
		file: `dist/vue-gridmultiselect${isMin ? '.min' : ''}${isUMD ? '' : '-esm'}.js`,
		format: format,
		...isUMD ? { name: 'VueGridMultiselect' } : null
	};
};

export default [{
	input: input,
	output: [getOutput('umd', true)],
	plugins: plugins.concat(uglify())
}, {
	input: input,
	output: [getOutput('umd', false)],
	plugins: plugins
}, {
	input: input,
	output: [getOutput('esm')],
	plugins: plugins
}];