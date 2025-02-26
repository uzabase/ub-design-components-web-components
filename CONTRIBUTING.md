# コントリビュート

## 開発環境の準備

開発を始めるには、リポジトリをクローンし、必要な依存パッケージをインストールしてください。パッケージマネージャーには[npm](https://www.npmjs.com/)を使用しています。

```sh
git clone git@github.com:uzabase/ub-design-components-web-components.git
cd ub-design-components-web-components
npm install
```

## テスト

### テストの実行

テストを実行するには、以下のコマンドを使用してください。

```sh
npm test
```

### ユニットテストの方針

このリポジトリでは、[Vitest](https://vitest.dev/)を使ったユニットテストを導入しています。新しいコンポーネントを追加する際は、この方針に従ってユニットテストも作成してください。

テストファイルは、`tests`ディレクトリ内に配置します。例えば、コンポーネントの実装ファイルが`src/components/button/ub-button.ts`の場合、対応するテストファイルは`tests/components/button/ub-button.test.ts`となります。

テストケースを作成するときは、コンポーネントがどのように利用されるかを考慮してください。以下の点を参考にしてみてください。

#### 属性のテスト

Web ComponentsによるUIコンポーネントでは、利用者がコンポーネントの振る舞いを制御するために属性が使用されることが多いでしょう。そのため、属性を設定したときの振る舞いを確認するテストは重要だと考えられます。

具体的には、以下のような状況についてのテストがあると良いでしょう。

- 属性を設定した場合
- 属性を設定しない場合
  - 例えば、属性が存在しないときはデフォルト値が設定される仕様であれば、その値が設定されていることを確認する
- 属性を更新した場合
  - 更新前の状態が残っておらず、正しく更新されていることを確認する
- 特定の文字列のみを受け付ける属性に無効な値を設定した場合
  - 例えば、`type`属性が`default`もしくは`destructive`のみを受け付ける場合、それ以外の値を設定した場合にどのような挙動になるかを確認する

これらの状況において、コンポーネントの振る舞いが正しいことを確認するテストを作成してください。例えば、以下のような振る舞いがあるかもしれません。

- 属性値が画面上に表示される
- コンポーネント内の要素に、特定のクラスが追加される
- コンポーネント内の他の属性に、特定の値が設定される

#### イベントのテスト

TODO: コンポーネントのインタラクティブな機能には、イベントを利用することが多いでしょう。そのため、イベントのテストも重要だと考えられます。イベントのテスト方針については、今後検討し追加する予定です。

#### フォーム部品のテスト

input系のコンポーネントについては、フォーム内での振る舞いを確認するテストがあると良いでしょう。なぜなら、Shadow DOM内にあるinput要素は、通常外側にあるフォームから扱うことができず、コンポーネントの実装の中で振る舞いを制御する必要があるためです。

具体的には、以下のようなテストがあると良いでしょう。

- [FormDataオブジェクト](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#html_%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%8B%E3%82%89_formdata_%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99)などを使ってフォームの値を取得した場合に、コンポーネント内の値が取得できる
- フォームをリセットした場合に、コンポーネント内の値がリセットされる

#### 書くべきではないテスト

以下のようなテストは、避けるようにしてください。

- コンポーネントの描画結果に対するテスト
  - 例えば、CSSスタイルのテストは避けてください。描画結果をテストする場合は、Visual Regression Testingなどを検討すると良いでしょう。
- コンポーネントの責務以外に対するテスト
  - 例えば、テスト対象となるコンポーネントが、内部で別のコンポーネントを利用している場合、その内部コンポーネントの責務に対するテストは避けてください。また、ブラウザの仕様（スクロールやリサイズなど）に依存するテストも避けてください。
- コンポーネントの内部構造に強く依存するテスト
  - 例えば、DOMの構造を過度にチェックするテストは避けてください。コンポーネントの内部構造はリファクタリングなどで簡単に変更される可能性があり、その度にテストを修正する必要が生じます。ただし、コンポーネントの振る舞いを実現するために不可欠なHTML要素については、これらがコンポーネントの品質に大きな影響を与えるため、適切にテストすることが重要です。

## Storybook

このリポジトリでは、[Storybook](https://storybook.js.org/)を利用してコンポーネントをプレビューできるようにしています。Storybookを利用することで、コンポーネントのUIや振る舞いを確認しながら開発を進めることができます。

### Storybookの起動

Storybookを起動するには、以下のコマンドを使用してください。

```sh
npm run storybook
```

### ストーリーの配置

Storybookに表示するストーリーを記載したファイルは、`stories`ディレクトリ内に配置します。例えば、コンポーネントの実装ファイルが`src/components/button/ub-button.ts`の場合、対応するストーリーのファイルは`stories/button/ub-button.story.ts`となります。

## CI

このリポジトリでは、[GitHub Actions](https://github.com/features/actions)を利用して以下のようなチェックを行っています。

- [Prettier](https://prettier.io/)によるコードのフォーマットチェック
- [ESLint](https://eslint.org/)によるコードのリントチェック
- TypeScriptコードのコンパイルチェック
- [Vitest](https://vitest.dev/)によるユニットテスト

上記のいずれかのチェックに失敗した場合は、コードを修正してください。
