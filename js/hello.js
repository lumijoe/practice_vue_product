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
        caseComputed: '引数不可のプロパティ、引数可のメソッドの違い(生成、表示、破棄の処理について)',
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

new Vue({
    el: '#appThree',
    data: {
        lifecycle: 'ライフサイクルフック(生成、表示、破棄の処理)、ウォッチャー',
        name: '',
        upperName: ''
    },

    created: function() {
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },
    watch: {
        name: function(newValue, oldValue) {
            this.delayFunc();
        }
    },
    methods: {
        getUpper: function() {
            this.upperName = this.name.toUpperCase();
        }
    }
});

new Vue({
    el: '#appFour',
    data: {
        a: 400,
        b: 200,
        amount1: 0 //初期値を設定 
    },
    methods: {
        calculate: function() {
            this.amount1 = this.a + this.b //計算結果をamount1に代入
        }
    }
});

new Vue({
    el: '#appFive',
    data: {
        messageForName: '名前を入力してください',
        myName: ''
    }
});