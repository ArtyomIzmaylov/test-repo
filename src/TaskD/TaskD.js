

const createHelloWorld = () => {
    return () => {
        console.log('Hello world!')
    }
}

const f = createHelloWorld()
f()

