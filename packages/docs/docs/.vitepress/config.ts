import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: '@pusula/module.core',
    description: 'Organize your frontend',

    themeConfig: {
        nav: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'test', link: '/test' },
        ],

        sidebar: [
            {
                items: [
                    { text: 'Getting Started', link: '/getting-started' },
                    { text: 'Test', link: '/test' },
                ],
            },
        ],
    },
});
