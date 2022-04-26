import thenfs from 'then-fs'
const promiseArr = [
    thenfs.readFile('./1.txt', 'utf8'),
    thenfs.readFile('./22.txt', 'utf8'),
    thenfs.readFile('./3.txt', 'utf8')
];
// Promise.all(promiseArr).then(([r1, r2, r3]) => {
//     console.log(r1);
//     console.log(r2);
//     console.log(r3);
// }).catch((err) => {
//     console.log(err.message);
// })
Promise.race(promiseArr).then((r) => {
    console.log(r);
}).catch((err) => {
    console.log(err.message);
})