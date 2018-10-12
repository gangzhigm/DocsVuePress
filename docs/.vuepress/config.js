module.exports = {
    // base
    title: "Cthulhu's dream",
    description: "I'a I'a.Cthulhu Fhatgn!",
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        navbar: true,
        nav: [{
                text: '哦？',
                link: '../markDown/menu.md'
            },
            {
                text: '嗯？',
                items: [{
                        text: '烫？',
                        link: '/language/chinese'
                    },
                    {
                        text: '饿？',
                        link: '/language/japanese'
                    }
                ]
            },
            {
                text: '戚？',
                items: [{
                        text: '疼？',
                        items: [{
                                text: '烫？',
                                link: '/language/chinese'
                            },
                            {
                                text: '饿？',
                                link: '/language/japanese'
                            }
                        ]
                    },
                    {
                        text: '呢？',
                        items: [{
                                text: '烫？',
                                link: '/language/chinese'
                            },
                            {
                                text: '饿？',
                                link: '/language/japanese'
                            }
                        ]
                    }
                ]
            }
        ],
        
        
        
        
        
        
        
        
        
        search: false,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}