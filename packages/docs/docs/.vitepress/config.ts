import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "en-US",
    title: "@pusula/module.core",
    description: "Organize your frontend",
    lastUpdated: true,
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/PusulaDev/module.core' }
        ],
        nav: [
            { text: "Getting Started", link: "/getting-started" },
            {
                text: "Layers",
                items: [
                    { text: "Module", link: "/layers/module" },
                    { text: "Global Module", link: "/layers/global-module" },
                    { text: "Http Client", link: "/layers/client" },
                    { text: "Provider", link: "/layers/provider" },
                    { text: "Mapper", link: "/layers/mapper" },
                    { text: "Cache", link: "/layers/cache" },
                    { text: "Action Guard", link: "/layers/action-guard" },
                    { text: "Localization", link: "/layers/localization" },
                    { text: "Utilities", link: "/layers/utilities" },
                ]
            },
            { text: "Our team", link: "/team" },
        ],

        sidebar: [
            {
                items: [
                    { text: "Getting Started", link: "/getting-started" },
                ]
            },
            {
                text: 'Layers',
                items:[
                    { text: "Module", link: "/layers/module" },
                    { text: "Global Module", link: "/layers/global-module" },
                    { text: "Http Client", link: "/layers/client" },
                    { text: "Provider", link: "/layers/provider" },
                    { text: "Mapper", link: "/layers/mapper" },
                    { text: "Cache", link: "/layers/cache" },
                    { text: "Action Guard", link: "/layers/action-guard" },
                    { text: "Localization", link: "/layers/localization" },
                    { text: "Utilities", link: "/layers/utilities" },
                ]
            },
            {
                items: [
                    { text: "Our Team", link: "/team" },
                ]
            },
        ]
    }
});
