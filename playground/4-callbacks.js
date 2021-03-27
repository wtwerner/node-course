// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Tommy', 'Lucy', 'Ella']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Chicago', (data) => {
//     console.log(data)
// })

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})