import thenfs from 'then-fs'

async function getAllFile() {
    const r1 = await thenfs.readFile('./1.txt', 'utf8')
    console.log(r1)
    const r2 = await thenfs.readFile('./2.txt', 'utf8')
    console.log(r2)
    const r3 = await thenfs.readFile('./3.txt', 'utf8')
    console.log(r3)
}

getAllFile()

// import thenFs from 'then-fs'

// console.log('A')
// async function getAllFile() {
//     console.log('B')
//     const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
//     console.log(r1)
//     const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
//     console.log(r2)
//     const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
//     console.log(r3)
//     console.log('D')
// }