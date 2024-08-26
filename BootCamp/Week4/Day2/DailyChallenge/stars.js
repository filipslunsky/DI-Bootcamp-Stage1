// one-loop solution
let output = ""
for (let i = 0; i < 6; i++) {
    output += "* "
    console.log(output)
}

// double-loop solution
let moreComplicatedOutput = ""
for (let i = 0; i < 6; i++) {
    moreComplicatedOutput += "*"
    for (let j = 0; j < 1; j++) {
        moreComplicatedOutput += " "
    console.log(moreComplicatedOutput)
    }
}

//note: I think the latter solution is unnecessarily complex and complicated but it is a proof of concept:-)
