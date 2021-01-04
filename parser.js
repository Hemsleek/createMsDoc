const file = require('fs')
const rawData = file.readFileSync('./data.in',{encoding:'utf-8'})
const data = rawData.split('\n').map(item => {
    const newArr = item.split(',')
    return {
        name:newArr[0],
        number:newArr[1]
    }
})
const finalData = JSON.stringify(data , null , 3)
file.writeFileSync('./main.js',`const data = ${finalData}` ,{encoding:'utf-8',flag:'w+'})

// const test = file.openSync('./main.js','utf-8')
// console.log(JSON.stringify(test , null, 3));