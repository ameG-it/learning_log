let o = { x: 1, y: 2, z: 3 };
let keys = [];
let i = 0;
for (keys[i++] in o);
console.log(keys); //=>[ 'x', 'y', 'z' ]
