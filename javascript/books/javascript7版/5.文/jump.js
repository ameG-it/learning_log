let a = [];
let b = [];

//loopというラベルをつける
loop: for (let i = 1; i < 10; i++) {
  b = [];
  for (let j = 1; j < 10; j++) {
    b.push(i * j);
    //
    if (i * j > 50) break loop;
  }
  a.push(b);
}
//breakでループを抜けると内側のループだけでなくラベルがついたループも抜ける
