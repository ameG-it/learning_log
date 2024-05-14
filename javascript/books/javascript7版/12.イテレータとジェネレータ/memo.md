## イテレータ

### JavaScript の反復処理

### 3 種類の型

- 反復可能オブジェクト（Set、Map など
  iterable な（反復可能な）オブジェクトのこと
  Aeeays Set
  特別なイテレータメソッド（Symbol.iterator）を持つ
  イテレータメソッドは next メソッドを持つイテレータオブジェクトを返す
- イテレータオブジェクト
  next メソッドを持つ任意のオブジェクト
  next メソッドは反復結果オブジェクトを返す

- 反復結果オブジェクト
  各ステップの結果（value,done）をオブジェクトとして保持する

  反復可能なオブジェクトとイテレータオブジェクトは街らわしいが別物

```javascript
let iterable = [99]; //反復可能オブジェクト

let iterator = iterable[Symbol.iterator](); //イテレータメソッドからイテレータオブジェクトを取得

//イテレータメソッドから反復結果オブジェクトを取得
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  //反復結果オブジェクト（value）
  console.log(result.value);
}
```

### イテレータオブジェクトのイテレータメソッド

組み込みデータ型のイテレータオブジェクトはイテレータオブジェクト自身も反復可能
これにより部分的に使用済みのイテレータを使うといった操作ができる

```javascript
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
```
