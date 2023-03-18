# WebCUI1
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Google Drive上のファイルをファイル例として使う方法

1. Google Apps Script (GAS)のプロジェクトを作成し、gas/files.gsに書いてあるコードをコピーする。

1. doPost関数内の変数dirを編集する。

1. 編集したら**デプロイ**を押し、**新しいデプロイ**を押す。

1. 種類は**ウェブアプリ**を選択。

1. 次のユーザーとして実行は**自分**を選択。

1. アクセスできるユーザーは**全員**を選択。

1. **デプロイ**を押す。

1. ウェブアプリ URLをコピーする。

1. コピーしたURLをassets/config.jsのfilesのgoogleDriveApiUrlに貼り付け、終了。

GASのコードを修正したら、デプロイしなおし、新しいURLを使う。

## files.gs 変数dirについて

name : ファイルの中身の展開先変数名

display : Webページ上に表示する名前

folderid : 使用するGoogleDriveのフォルダID

extension : ファイル拡張子の値の展開先変数名
