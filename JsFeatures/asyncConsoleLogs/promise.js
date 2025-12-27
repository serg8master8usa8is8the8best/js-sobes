console.log('start');
new Promise((resolve) => {
  console.log(1);
  resolve(2);
}).then(res => console.log(res));
console.log('end');

Promise.