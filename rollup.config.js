  
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        name: 'vuegridmultiselect',
        file: 'dist/vue-multiselect.js',
        format: 'umd'
    },
    plugins: [
        commonjs(),
        resolve(),
        vue({ css: true }),
        babel({
            extensions: [ '.js', '.vue' ],
            exclude: ['node_modules/**'],
            presets: ['@babel/preset-env']
        })
    ]
}