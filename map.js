
const testArray = ['test1', 'test2', 'test3']

 function  newMap (fn) {
    let newArray = []
    for(let i = 0; i < this.length; i++)
    {
        newArray.push(fn(this[i], i, this))
    }
    return newArray
}


Object.defineProperty(Array.prototype, 'newMap', {
    value: newMap
})

const test = testArray.newMap((val, index , array)=>{
    console.log(val)
    console.log(index)
    console.log(array)
return val
})
console.log(test)