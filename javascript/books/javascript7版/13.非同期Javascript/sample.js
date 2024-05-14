//const URL = "https://jsonplaceholder.typicode.com/posts/1";
// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// let P1 = fetch(URL)
//   .then((res) => {
//     let P2 = res.json();
//     P2 = Promise.resolve(1);
//     console.log("P2", P2);
//     return P2;
//   })
//   .then((data) => console.log("data", data));

// console.log("P1", P1);

// let URLList = [...Array(5)].map(
//   (_, i) => `https://jsonplaceholder.typicode.com/posts/${i}`
// );

// let Promises = URLList.map((map) => fetch(map).then((res) => res.json()));

// Promise.all(Promises).then((data) => console.log(data));

const URL = "https://jsonplaceholder.typicode.com/posts/1";
const getTitle = async () => {
  let res = await fetch(URL);
  console.log("res", res);
  let data = await res.json();
  console.log("data", data);
  return data;
};

getTitle().then((data) => console.log(data));
