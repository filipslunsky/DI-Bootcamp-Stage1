const findAvg = (gradeList) => {
    let sum = 0;
    for (grade of gradeList) {
        sum += grade
    }
    let avg = sum / gradeList.length
    console.log(avg)
    return avg
}


const evaluateAvg = (gradeList) => {
    let avg = findAvg(gradeList);
    if (avg >= 65) {
        console.log("You have passed the course successfully, congratulations.")
    } else {
        console.log("You have failed the course and need to take it again.")
    }
}

let gradeList = [67, 31, 52, 99, 83, 16];

evaluateAvg(gradeList)
