// unicodeが使える
// 可搬性や編集のしやすさを考えると、ASCII文字のみを使うべき
const π = 3.14;
console.log(π);

// unicodeが使えない環境を考慮し、ASCII文字を使ってunicodeを表現する
console.log(π);

// 非ASCII文字を使うと、見かけ上同じ文字列でも異なる識別子になることがある
café = 1; // caf\u{e9}
café = 2; // cafe\u{301}
console.log("caf\u{e9}:" + café);
console.log("cafe\u{301}:" + café);

//
console.log(0xff); //=> 255
console.log(0xff + 1); //=> 256

//浮動小数点りてらる
console.log("2.0*10^3: " + 2.0e3); // => 2000

// 数値リテラルの中ではアンダースコアが使える
//長い数値リテラルを読みやすくする時に有効
const M = 1_000_000;
const G = 1_000_000_000;
console.log(2 * M); //=> 2000000

// オーバーフロー
console.log(1e308 * 10); //=> Infinity
console.log(1 / 0); //=> -Infinity

//計算不能なものは不定値になる
console.log(Infinity - Infinity); //=>NaN

//NaNの判定はできない
const NaN1 = Infinity - Infinity;
const Nan2 = Infinity - Infinity;

console.log(NaN1 == NaN); //=>false
console.log(NaN1 == Nan2); //=>false

console.log(Number.MAX_SAFE_INTEGER); //=>9007199254740991
console.log(Number.MAX_VALUE); //=>1.7976931348623157e+308

//BigIntは整数しか表現できないので通常の数値型と混ぜて使うことができない
//console.log(1000n + 1); //=>TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(10n == 10.0); //true
console.log(10n === 10.0); //false 型までチェックするので

let love = "❤️";

let hello = "hello";

console.log(hello[0]);

// 一行のメッセージを複数行で記述
const msg =
  "こんにちは\
今日は\
いい天気ですね";
console.log(msg); //=>こんにちは今日はいい天気ですね

// 一行のメッセージを複数行で記述
const msg2 = "こんにちは\n今日は\nいい天気ですね";
console.log(msg2);
/**
 * こんにちは
今日は
いい天気ですね
 */

const t = "world";
console.log(`hello ${t}`);

//タグ付きテンプレートリテラル
//最初のバッククォーとの前に関数名（タグ）を記述する
//タグ関数は文字列リテラルの部分と展開された値を引数として受け取る
//タグ関数は文字列リテラルの部分と展開された値を組み合わせて処理する
console.log("hello\nworld".length); //=> 11
console.log(String.raw`hello\nworld`.length); //=>12

let str = "hello world";
console.log(str.search(/world/)); //=>6
