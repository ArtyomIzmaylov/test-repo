type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init

    for (let i =0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result
};

const myArray : number[] = []

const res = reduce(myArray, (accum, curr) => {
    return accum + curr * curr
}, 111)

console.log(res)