([
    {
        block: 'b-page',
        mods: { exp: 'ololo' },
        js: { a: 'b' },
        title: 'заголовок',
        head: [
            { elem: 'css', url: '_10-b-page-simple.css' },
            { elem: 'css', url: '_10-b-page-simple.ie.css', ie: true },
            { block: 'i-jquery', mods: {version: '1.8.3'} },
            { elem: 'js', url: '_10-b-page-simple.js' }
        ],
        content: [
            {
                elem: 'aaa',
                content: {
                    elem: 'abab',
                    mix: [{
                        block: 'b1'
                    }]
                }
            },{
                elem: 'bbb',
                elemMods: {
                    m1: 'v1'
                }
            },{
                block: 'b-bla',
                mods: {
                    m2: 'v2'
                }
            },{
                block: 'b-bla',
                mods: {
                    m2: 'v2',
                    m3: 'v3'
                },
                content: [
                    {
                        block: 'b1',
                        mods: {
                            mm: 'vv'
                        }
                    }
                ]
            }
        ]
    }
])
