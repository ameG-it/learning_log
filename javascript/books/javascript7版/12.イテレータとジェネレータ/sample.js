// let iterable = [99]; //反復可能オブジェクト
// //反復可能オブジェクトは特別なイテレータメソッド（Symbol.iterator）を持つ
// //イテレータメソッドはnextメソッドを持つオブジェクトを返す
// let iterator = iterable[Symbol.iterator](); //イテレータを取得
// //反復結果オブジェクト（next）
// for (let result = iterator.next(); !result.done; result = iterator.next()) {
//   //反復結果オブジェクト（value）
//   console.log(result.value);
// }

// let list = [1, 2, 3, 4];
// //イテレータオブジェクトを取得
// let iter = list[Symbol.iterator]();
// //先頭の要素を取得
// let head = iter.next();
// //iter自身もイテレータメソッドを持つ
// let middle = iter[Symbol.iterator]().next();
// //iter自身もイテレータメソッドを持つので、反復可能な特性は失われていない
// let tail = [...iter];

// console.log("head:", head);
// console.log("middle:", middle);
// console.log("tail:", tail);

class Range {
  constructor(start, to) {
    this.start = start;
    this.to = to;
  }

  //イテレータメソッドを定義
  [Symbol.iterator]() {
    let next = Math.ceil(this.start);
    let last = this.to;
    return {
      //反復可能オブジェクトnextメソッド
      next() {
        return next <= last ? { value: next++ } : { done: true };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

let range = new Range(1, 10);

//イテレータオブジェクトを取得
let iter = range[Symbol.iterator]();
//イテレータオブジェクトから先頭の要素を取得
let head = iter.next();
//iter自身もイテレータメソッドを持つ
let nextIter = iter[Symbol.iterator]();
//iter自身もイテレータメソッドを持つので、反復可能な特性は失われていない
let tail = [...nextIter];

console.log("head:", head); //=>{ value: 1 }
console.log("tail:", tail); //=>[2,3,4,5,6,7,8,9,10]

// for (let x of new Range(1, 10)) {
//   console.log(x);
// }

// let arr = [1, 2, 3];
// let iterables = arr[Symbol.iterator]();
// console.log(iterables.next().value);
// console.log(...iterables);

// let range = new Range(1, 1000000);

// const startTime = Date.now(); // 開始時間
// range.map( (x) => x * 2);
// const endTime = Date.now(); // 終了時間

// console.log(`処理時間${endTime - startTime}`); // 何ミリ秒かかったかを表示する

const Range2 = function* (start, to) {
  for (let i = Math.ceil(start); i <= to; i++) {
    yield i;
  }
};
const itarJoin = function* (...itars) {
  for (let itar of itars) {
    for (let val of itar) {
      yield val;
    }
  }
};

itars = itarJoin(Range2(1, 10), Range2(11, 20)); //=>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log([...itars]);

//yield*を使って反復可能オブジェクトを展開する

const itarJoin2 = function* (...itars) {
  for (let itar of itars) {
    yield* itar;
  }
};
itars = itarJoin2(Range2(1, 10), Range2(11, 20)); //=>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log([...itars]);
// let range2 = Range2(0.01, 10.2);
// console.log(range2.next().value);
// console.log(range2.next().value);
// console.log(range2.next().value);
//console.log(range2.next());

function* left(n, string) {
  let it = string[Symbol.iterator]();
  while (n-- > 0) {
    let next = it.next();
    if (next.done) return;
    yield next.value;
  }
}

console.log([...left(2, "hello")]); //=>[ 'h', 'e' ]
