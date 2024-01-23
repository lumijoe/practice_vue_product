## 復習用、開発テスト用

- html：js を読み込んで描画で反映させる。js：アプリ本体の処理を動かす。
- el: エレメント。#の ID が一致する html 要素を Vue インスタンスがマウント（動作）する。
- Tailwindcss のインストール、node_modules 自動生成、.gitignore ファイル生成：touch .gitignore
- .gitignore ファイルに node_modules を追加

##　　その他サイト

- Vue CDN：https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js
- オフライン環境本番バージョンインストール：https://v2.ja.vuejs.org/v2/guide/installation
- 画像圧縮：I love PDF, Tiny PNG
- Tailwindcss：npm install tailwindcss

## CSS

**Tailwindcss の導入**

- npm install tailwindcss
- npx tailwindcss init
- package-lock.json 自動生成
- package.json 自動生成
- node_modules 自動生成
- tailwind.config.js 自動生成
- .gitignore ファイルを生成：touch .gitignore
- .gitignore ファイルに node_modules を追加記述
- 使用する html ファイルの head タグ内に link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css"を記述
- デフォルトの css が解除されてしまうので要注意
