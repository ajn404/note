import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import head from './config/head.config';
import viteConfig from './config/vite.config';
import navbar from './config/nav.config';
import localTheme from './theme';
import { path } from '@vuepress/utils';

export default defineUserConfig({
    title: 'note',
    description: 'note for ecma , glsl , typescript , rust , leetcode , p5 , vtk , kaboom , three , hutao',
    base: '/note/',
    open: true,
    host: '0.0.0.0',
    port: 9999,
    head,
    markdown: {
        headers: {
            level: [1, 2, 3, 4, 5, 6],

        }
    },
    shouldPreload: (file, type) => {

        if (type === 'font') {
            return file.indexOf('smile') === -1
        }
        if (type === 'image') {
            return file.indexOf('hutao') === -1
        }
    },

    clientConfigFile: path.resolve(
        __dirname,
        './config/clientConfig.ts'
    ),
    bundler: viteBundler(
        {
            //@ts-ignore
            viteOptions: viteConfig
        }
    ),
    theme: localTheme({
        navbar: navbar,
        colorMode: 'dark',
        repo: 'https://github.com/ajn404/note',
        docsRepo: 'https://github.com/ajn404/note',
        sidebarDepth: 6

    })

});