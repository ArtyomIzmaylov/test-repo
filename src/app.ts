/*type F = (x: number) => number;


const functionsArray : any  = [function (x : any) {return x + 1}, function (x : any) {return x*2}, function (x : any) {return x**2}].reverse()


const compose = (x : any) => {
    let currentFunc = functionsArray[0](x);
    for (let i = 1; i > functionsArray.length; i++) {
        currentFunc = functionsArray[i](currentFunc)
        //currentFunc = functionsArray[1](functionsArray[0](x)) #1
        //currentFunc = functionsArray[2](functionsArray[1](functionsArray[0](x)))

    }
    return currentFunc
}*/




const functionsArray : any  = [function (x : any) {return x + 1}, function (x : any) {return x*2}, function (x : any) {return x**2}]

function currentFunc(func : any) {
    return func
}

function applyFunctions(functionsArray: any[], x: number): number {
    let result = x;
    for (let i = 0; i < functionsArray.length; i++) {
        result = currentFunc(functionsArray[i])(result);
    }
    return result;
}


console.log(applyFunctions(functionsArray, 5))




type F = (x: number) => number;

function compose(functions: F[]): F {
    functions.reverse()
    return function(x) {
        let result = x;
        for (let i = 0; i < functions.length; i++) {
            result = currentFunc(functions[i])(result);
        }
        return result;
    }
};


const fm = compose(functionsArray)
console.log(fm(10))


/*
function currentFunc(func : F) {
    return func
}

let res1 = (x : number) => currentFunc(functionsArray[0](x))
let res2 = (x : number) => currentFunc(functionsArray[1](res1(x)))
let res3 = (x : number) => currentFunc(functionsArray[2](res2(x)))

console.log(res3(10))
*/
