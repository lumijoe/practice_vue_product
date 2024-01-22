// hello.js
let app = new Vue({
    el: '#app',
    data: {
        message: 'おはよう！',
        message2: 'こんにちわ！',
        message3: 'Vue公式ページ（本番ver.インストール）',
        url: 'https://v2.ja.vuejs.org/v2/guide/installation',
        url2: 'https://v2.ja.vuejs.org/v2/guide/installation',
        message4: '省略形で記述：Vue公式ページ',
        flag: false
        

    }
});

let appTwo = new Vue({
    el: '#appTwo',
    data: {
        email1: 'Y-suzuki@example.com',
        email2: 'S-tAKESHI@example.com',
        caseComputed: '引数不可のプロパティ、引数可のメソッドの違い',
        current: new Date().toLocaleString()
    },

    // 処理：算出プロパティの場合（取得用途、引数はNG）
    computed: {
        localEmail: function() {
            return this.email1.split('@')[0].toLowerCase();
        },
        randomComputed: function() {
            return Math.random();
        }
    },

    // 処理：メソッドの場合（HTML、js側共に()引数の使用が可能）
    methods: {
        localEmail2: function() {
            return this.email2.split('@')[0].toLowerCase();
        }, 
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        randomMethods: function() {
            return Math.random();
        }
    }
});