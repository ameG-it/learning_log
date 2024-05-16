let o = {
  x: 1,
  y: 2,
  z: 3,
};

let o1 = Object.create(o);
o1.a = 4;

for (let p in o1) {
  console.log(p);
}

for (let p of Object.keys(o1)) {
  console.log(p);
}
