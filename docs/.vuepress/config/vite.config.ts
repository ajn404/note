//@ts-ignore
import glsl from 'rollup-plugin-glsl';
import Components from 'unplugin-vue-components/vite';
import commonjs from "rollup-plugin-commonjs";

const { path } = require('@vuepress/utils');
const resolve = (dir:any) => {
    return path.resolve(__dirname, dir)
};
const viteConfig = {
    resolve:{
        alias:{
            '@':resolve('../'),
            '@components':resolve('../../components'),
            '@scripts':resolve('../../scripts'),
            '@shaders':resolve('../../shaders'),
            '@styles':resolve('../../styles')
        }
    },
    build: {
        rollupOptions: {
            external: ['p5'],
            plugins: [
                commonjs(),
              ],
        },
        dynamicImportVarsOptions: {
        },
        chunkSizeWarningLimit: 10000
    },
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'charset-removal',
                    AtRule: {
                        charset: (atRule:any) => {
                            atRule.remove()
                        }
                    }
                }
            ]
        }

    },
    plugins:[
        glsl({
            include: './**/*.glsl',
            exclude: ['**/index.html'],
            sourceMap: false
        }),
        Components({
            dirs:[resolve('../../components')],
            allowOverrides: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),
    ],
    ssr: {
        noExternal: ['three','p5','kaboom']
    },  
}

export default viteConfig