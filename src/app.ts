type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[] = [], t: number): Function {
    callback(true)
    const timer = setInterval(() => {
        callback(true)
    }, t)
    function callback(flag : boolean = false) {
        if (flag) {
            fn(...args)
        }
        else {
            clearInterval(timer)
        }

    }
    return callback
};


const cancelFm = cancellable((x :any) => x*2, [4], 35)
setTimeout(cancelFm, 190)

const start = performance.now();
