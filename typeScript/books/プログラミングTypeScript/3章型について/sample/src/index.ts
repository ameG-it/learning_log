/** unknown */
let a: unknown = 30;
let b = a === 123; //比較演算子は型チェックを行わないためエラーにならない
let c = a + 10; // unknown型が何かわかってないのでエラーになる
if (typeof a === "number") {
  let d = a + 10;
}

/** リテラル型 */
let e: 123 = 123; // 123以外はエラー
e = 123;
e = 12;

/**シンボル型 */
let f = Symbol("a");
let g = Symbol("a");
let fg = f === g; // かならずfalseになる
let h: unique symbol = Symbol("a");

/** object型 */
let i: object = {
  foo: "bar",
};
i.foo; // fooは存在しないとエラーになる

let j: { foo: number } = {
  foo: 123,
};
j.foo; // エラーにならない

/** 型エイリアス */
type Num = number;
let k: Num = 123;
let l: number = 456;
k = l;

/** 合併型と交差型 */
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

// Andの場合は両方のプロパティが必要
AndCar = {
  name: "abc",
  charging: 123,
  fuel: 123,
};

let xx: number[];
let ss: Array<number>;

let yy: (number | string)[];

// タプル
let profile1: [string, number] = ["フリーザ", 530000];

//?をつけるとundefinedも許容される
let profile2: [string, number?] = ["フリーザ"];

//可変長の要素を持つタプル
let profile3: [string, ...number[]] = ["フリーザ", 530000, 530000, 530000];

// 読み取り専用の配列タプル
let arr: readonly number[] = [1, 2, 3];
arr[0] = 4; //エラーになる
arr.push(4); //エラーになる

let arrConcat = arr.concat(4); //エラーにならない

//null型
// 計算しようとして失敗しようとした場合など
const calcDiv = (a: number, b: number) => {
  if (b === 0) {
    return null;
  }
  return a / b;
};
