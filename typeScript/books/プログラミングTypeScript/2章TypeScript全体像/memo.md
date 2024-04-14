#　 2 章 TypeScript 全体像

## 2.1 コンパイラー

コンパイラは一般的に以下のようなステップでバイトコードへの変換を行う

- コード →AST（抽象構文木）
  人が書いたコードから不要なもの「空白、コメント」などを無視した構造に変換する
- AST→ バイドコード
  AST をランタイムで実行可能なよりハードウェアに近い表現に変換する

バイトコードはランタイムによって評価（プログラム実行）される

TypeScript のコンパイラ（TSC）は AST をバイトコードではなく JavaScript に変換する

おおざっぱに以下の流れ

- TypeScript → TypeScriptAST
- TypeScriptAST が型チェッカーによってチェックされる
- TypeScriptAST → JavaScript
- JavScript → JavaScriptAST
- JavaScriptAST → バイトコード

TypeScriptAST から JavaScript に変換するときに、プログラマが作成したデータ型は意識されない
つまり、
プログラムが作成されたデータ型は型チェックのみに使用され、
アウトプットには影響を与えない

## 2.2 型システム

型をつける方法は 2 種類ある
・明示的型付（アノテーション）
・型推論

TypeScript では型推論をうまく使うことで明示的型付けを省略できる。
明示的型付けを最小限にし、TypeScript に型推論させることが推奨される。

### TypeScript Vs JavaScript

JavaScript では実行時に起きていただろうエラーの一部が
TypeScript ではコンパイル時のエラーとして検出できる。

- 型の評価
  JavaScript:実行時に評価
  TypeScript:コンパイル時に評価
  javaScript では実行時に型が決まるため、エラーの原因になることがある
  TypeScript はコンパイル時に型が決まるため、プログラム実行前にエラーであることを検出できる。

- 型の自動変換
  JavaScript では自動的に型変換されるが TypeScript ではエラーとなる
  ```javaScript
  3 + [1]; //例えばJavaScriptでは'31'と評価される
  ```
  自動変換は便利な機能である一方、実行時の原因不明のエラーの原因となることがある。
  TypeScript は自動変換しない一方、これらが実行時のエラーの原因となることはない。

## 環境

### tsconfig.json

tsconfig.json では TypeScript から JavaScript へコンパイルするときの設定を行うことができる

コマンドで簡単に生成することも可能

```bash
./node_modules/.bin/tsc --init
```

```json --tsconfig.json
{
  "compilerOptions": {
    /* Language and Environment */
    "lib": ["es2015", "DOM"], //コードの実行環境にどのAPIが存在するか想定するための設定
    "module": "commonjs", //どのモジュールシステムにコンパイルするか
    "outDir": "dist", //生成したJavaScriptファイルの出力先
    "strict": true, //できるだけ厳密な型チェックを行う。すべてのコードに型がついていることを保証する
    "target": "ES2015" //どのJavaScriptバージョンにコンパイルするか
  },
  "include": ["src"] // コンパイル対象のファイルの格納先
}
```

### tslint.json

設定することにより、コードスタイルが強制できる
必須ではないがコードスタイルについての議論が不要になるため、設定することを強く推奨
TSLint は 2019 年時点で非推奨となり
現在は javascript のリンターである ESlint に TypeScript 用のプラグインを入れてリント（静的解析）することが推奨されている

### コンパイル

```bash
.
├── package-lock.json
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

TSC でコンパイルを実行

```bash
node node_modules/.bin/tsc
```

dist にコンパイル結果が生成される

```bash
.
├── dist
│   └── index.js
├── package-lock.json
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

コンパイル結果の実行

```bash
node dist/index.js
```

### コンパイル作業の簡略化

TSC でコンパイル、js ファイルを実行のようなステップを毎回踏むのは面倒なので
ts-node などで実行することがおおい

- ts-node
  コンパイルを実行を 1 つのコマンドで行うことができる

- typescript-node-starter
  フォルダ構造をすばやく生成でｓキル
