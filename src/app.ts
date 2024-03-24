function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let transformArray = []
    for (let i = 0; i < arr.length; i++) {
        transformArray.push(fn(arr[i], i))
    }
    return transformArray
};


const myArray = [1,3,5]


const newArray = map(myArray, (n, i) => {
    return n+i
})

console.log(newArray)