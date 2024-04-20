# 型について

> 型(type)
>
> > 値とそれを使ってできる事柄の集まり

## any 型

すべての値の集まりであるため TypeScript のメリットが失われてしまう。
可能な限り使用を避けるべき型
TypeScript のデフォルトでは any を使うことは禁止されていない
tsconfig.json の noImplicitAny を true にすることで
暗黙の any が禁止される。
strict にも含まれているため、strict が true であれば設定不要

## unknown 型

事前に入る値が本当にわからない場合、any の代わりに使用する。
any と同様に任意の値を取ることができる。
any 型と違い、他の型の変数に割り当てる前の型チェックが強制される
型の絞り込み（typeof など）を行い、unknown 型の値が何であるかが決まらないと
unknown 型の使用を許容しない。

型推論で unknown 型と推論されることはない

## リテラル型

ただ一つの値を表しそれ以外の値は受け入れない

## オブジェクト型

object は any と似ていて object で何が表現されるかについては多く語られない

オブジェクトリテラル表記（リテラル型と混同しないように注意）する必要がある

オブジェクト型には修飾子として`?`や`readonly`を使うことができる。

- ?
  オブジェクト型を宣言するときに未定義を許容できる
- readonly
  後から変更できないようにする。const のようなもの

空のオブジェクト`{}`と`Object`は扱いづらいため使用非推奨

## 型エイリアス

`type`を使うことで型に別名をつけることができる。
別名なので元の型と同じように振る舞う

```typescript
/** 型エイリアス */
type Num = number;
let k: Num = 123;
let l: number = 456;
k = l;
```

## 合併型と交差型

`|`で合併型を、`&`で交差型を表現できる

```typescript
type GasolineCar = {
  name: string;
  charging: number;
};
type ElectriCar = {
  name: string;
  fuel: number;
};

let OrCar: ElectriCar | GasolineCar;
let AndCar: GasolineCar & ElectriCar;
```

Or の場合、いづれかの型に一致する必要がある（複数も OK）

```typescript
// Orの場合はどちらかのプロパティが必要
OrCar = {
  name: "abc",
  fuel: 123,
};

// Orの場合はどちらかのプロパティが必要
OrCar = {
  name: "abc",
  charging: 123,
};

// Orの場合はどちらも持っていてもOK
OrCar = {
  name: "abc",
  charging: 123,
  fuel: 123,
};
```

交差型はすべてのプロパティを持つ必要がある。

```typescript
// Andの場合は両方のプロパティが必要
AndCar = {
  name: "abc",
  charging: 123,
  fuel: 123,
};
```

## 配列

TypeScript では`T[]`と`Array<T>`の二つの構文がサポートされている

```typescript
let a: number[];
let a: Array<number>;
```

配列と合併型を組み合わせることもできるが、
配列をループ処理する際などに、型チェックなどの必要が出てくるため
値を均一にすることが望ましい。

```typescript
let numStrArray: (number | string)[];
```

```typescript

numStrArray.map(_=>{
  if(typeof _ === 'number')
  return  _ + 3
}
return _.toUpperCase())

```

## タプル

固定長の配列を型付けするもの
タプルは明示的に型をつける必要があり、
角括弧`[]`から推論されることはない。
すでに配列がそのルールに該当する。

```typescript
// タプル
let profile1: [string, number] = ["フリーザ", 530000];

//?をつけるとundefinedも許容される
let profile2: [string, number?] = ["フリーザ"];

//可変長の要素を持つタプル
let profile3: [string, ...number[]] = ["フリーザ", 530000, 530000, 530000];
```

タプルは不均一な配列を安全にコード化できる！
配列よりも安全性がますため、不均一なリストを扱う場面では積極的に活用すべし

## 読み取り専用にする

可変性を避けることでコードの可読性が増す。
実態は通常の javascript の配列と変わらないので、
大きな配列での Slice やスプレッド`...`を使った変更は、パフォーマンスに影響する。

```typescript
// 読み取り専用の配列タプル
let arr: readonly number[] = [1, 2, 3];
arr[0] = 4; //エラーになる
arr.push(4); //エラーになる

let arrConcat = arr.concat(4); //エラーにならない
```

## null undefined void never

`存在しない`を表す型

JavaScript にある

- null
  値が欠如している
  計算しようとして失敗した場合など

```typescript
const calcDiv = (a: number, b: number) => {
  if (b === 0) {
    return null;
  }
  return a / b;
};
```

- undefined
  あるものがまだ値を持っていない

TypeScript で追加

- void
  明示的に何も返さない関数の戻り値。（console.log の戻り値など）

```typescript
const hello = (): void => {
  console.log("Hello");
};
```

- never
  決して戻ることのない関数の型
  例外をスローする関数や、永久に実行される関数など

```typescript
const error = (msg: string) => {
  throw new Error(msg);
};
```

typescript ではコードの中で null がチェックできるので
null ポインタを参照するような操作を事前に防ぐことができる。
