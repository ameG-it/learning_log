let cnt = 0;
for (let c of "abc") {
  console.log(c); //=>a, b, c
  //  console.log(cnt++); //=>0,1,2
}

cnt = 0;
for (let c of "❤️") {
  console.log(c); //=>❤️
  console.log(cnt++); //0, 1
}
console.log("❤️".length);
