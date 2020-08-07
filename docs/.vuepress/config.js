module.exports = {
    title: '云乡',
    description: '云之幻的软件中心',
    
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }],
        //['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: ['@vuepress/back-to-top',[
        
        {
          base_url: '/', // required
          site_url: 'https://www.richasy.cn', // required
          copyright: '2019 Richasy', // optional
          // How much articles
          count: 20
        }
    ]],
    themeConfig: {
        repo: 'Richasy/AppCenter',
        docsDir: 'docs',
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '修改页面',
        nav: [{
                text: '博客',
                link: 'https://blog.richasy.cn'
            },
            {
                text: 'BiliBili',
                link: 'https://space.bilibili.com/5992670/#/'
            },
        ],
        sidebar: {
            '/apps': [{
                title: '软件集',
                collapsable: true,
                children: [
                    ['/apps/', "软件说明"],
                    ['/apps/wfa', "Warframe Alerting Prime"],
                    ['/apps/acrmd', "Acrylic Markdown"],
                    ['/apps/mdlite', "Markdown Lite"],
                    ['/apps/rss', "RSS Stalker"],
                    ['/apps/pictureshare', "Picture Share"],
                    ['/apps/clean_reader', "Clean Reader"],
                ]
            }],
            '/document/wfa/qa': [{
                title: 'WFA 常见问题',
                collapsable: true,
                children: [
                    ['/document/wfa/qa/', "WFA常见问题"],
                    ['/document/wfa/qa/setup_and_show', "安装与显示问题"],
                    ['/document/wfa/qa/translate_and_toast', "翻译与通知问题"],
                    ['/document/wfa/qa/wm_question', "WM价格查询问题"],
                    ['/document/wfa/qa/riven_market', "紫卡市场问题"],
                    ['/document/wfa/qa/others', "其他问题"],
                ]
            }],
            '/document/wfa/api': [{
                title: 'WFA-API文档',
                collapsable: true,
                children: [
                    ['/document/wfa/api/', "API介绍"],
                    ['/document/wfa/api/how_to_apply', "申请权限"],
                    ['/document/wfa/api/authorize', "获取授权"],
                    ['/document/wfa/api/warframe_status', "Warframe信息"],
                    ['/document/wfa/api/warframe_market', "WM 价格查询"],
                    ['/document/wfa/api/riven_market', "WFA紫卡市场"],
                    ['/document/wfa/api/appendix_1', "附录1"],
                    ['/document/wfa/api/appendix_2', "附录2"],
                ]
            }],
            '/document/wfa/data': [{
                title: 'WFA-API文档（新版）',
                collapsable: true,
                children: [
                    ['/document/wfa/data/', "API介绍"],
                    ['/document/wfa/data/how_to_apply', "申请权限"],
                    ['/document/wfa/data/authorize', "获取授权"],
                    ['/document/wfa/data/warframe_status', "Warframe信息"],
                    ['/document/wfa/data/warframe_market', "WM 价格查询"],
                    ['/document/wfa/data/account', "WFA用户查询"],
                    ['/document/wfa/data/riven_market', "WFA紫卡市场查询"],
                    ['/document/wfa/data/lib', "资料库查询查询"],
                    ['/document/wfa/data/sdk_introduce', "SDK说明"],
                ]
            }],
            '/document/wfa/use': [{
                title: 'WFA使用说明',
                collapsable: true,
                children: [
                    ['/document/wfa/use/', "使用说明"],
                    ['/document/wfa/use/account', "账户系统"],
                    ['/document/wfa/use/basic', "游戏信息"],
                    ['/document/wfa/use/warframemarket', "Warframe Market"],
                    ['/document/wfa/use/rivenmarket', "紫卡市场"],
                    ['/document/wfa/use/lib', "资料库"],
                    ['/document/wfa/use/tools', "工具库"],
                    ['/document/wfa/use/history', "更新历史"],
                ]
            }],
            '/document/pictureshare': [{
                title: 'Picture Share 说明书',
                collapsable: true,
                children: [
                    ['/document/pictureshare/about', "关于PICTURE SHARE"],
                    ['/document/pictureshare/use', "使用说明"],
                    ['/document/pictureshare/qa', "常见问题"],
                ]
            }],
            '/document/acrmd': [{
                title: 'Acrylic Markdown说明书',
                collapsable: true,
                children: [
                    ['/document/acrmd/use', "快速开始"],
                    ['/document/acrmd/module', "功能概览"],
                    ['/document/acrmd/conversion', "部署转换服务"],
                    ['/document/acrmd/shortcut', "快捷操作"],
                    ['/document/acrmd/grammar', "语法综述"],
                    ['/document/acrmd/history', "更新历史"],
                ]
            }],
            '/document/mdlite': [{
                title: 'Markdown Lite说明书',
                collapsable: true,
                children: [
                    ['/document/mdlite/use', "快速开始"],
                    ['/document/mdlite/shortcut', "快捷操作"],
                ]
            }],
            '/document/rss': [{
                title: 'RSS Stalker 说明书',
                collapsable: true,
                children: [
                    ['/document/rss/beta', "内测说明"],
                    ['/document/rss/use', "使用说明"],
                    ['/document/rss/service', "服务支持列表"],
                    ['/document/rss/fever', "Fever 说明"],
                    ['/document/rss/feed', "订阅源使用说明"],
                    ['/document/rss/page', "页面使用说明"],
                    ['/document/rss/schema', "文章说明"],
                    ['/document/rss/podcast', "播客说明"],
                    ['/document/rss/readlater', "稍后阅读服务说明"],
                    ['/document/rss/authorize', "UWP中翻墙授权的特殊操作"],
                    ['/document/rss/history', "更新历史"],
                ]
            }],
            '/document/cleanreader': [{
                title: 'Clean Reader 说明书',
                collapsable: true,
                children: [
                    ['/document/cleanreader/use', "使用说明"],
                    ['/document/cleanreader/history', "更新历史"],
                ]
            }],
            '/document/bilibili': [{
                title: '哔哩说明书',
                collapsable: true,
                children: [
                    ['/document/bilibili/qa', "常见问题"],
                    ['/document/bilibili/update', "更新历史"],
                ]
            }],
        }
    },
    markdown: {
        anchor: {
            permalink: true
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-mark'));
            md.use(require('markdown-it-katex'));
            md.use(require("markdown-it-sup"));
            md.use(require("markdown-it-sub"));
            md.use(require("markdown-it-plantuml"));
        }
    }
}