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
        flag: false,

    }
});

let appTwo = new Vue({
    el: '#appTwo',
    data: {
        email: 'Y-suzuki@example.com'
    },

    // 処理：算出を取得
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
});