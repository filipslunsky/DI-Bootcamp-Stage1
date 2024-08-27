// they work very similarly to try:/ except:
// in JS it is try/catch(e) where "e" stands for "exception"

const func = () => {
    try {
        console.log("starting the try block")
        hello // this will throw reference error
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err.name)
        console.log(err.message)
        console.log(err.stack)
    } finally {
        console.log("function done")
    }
}

func()


