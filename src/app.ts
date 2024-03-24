type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let transformArray : number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i) === false || (fn(arr[i], i) === 0 && typeof fn(arr[i], i) ==="number" ))  {
            continue
        }
        transformArray.push(arr[i])

    }
    return transformArray
};

const arr = [-1,1, 0,3,5,7]
function functionArr (n : number, i : number) {
    return n > -1
}

const newArray = filter(arr, functionArr)

console.log(newArray)