let john = {
    fullName: "John Doe",
    mass: 78,
    height: 179,
    bmi() {
        let result = this.mass/((this.height/100) ** 2)
        return result
    }
}

let jane = {
    fullName: "Jane Roe",
    mass: 57,
    height: 166,
    bmi() {
        let result = this.mass/((this.height/100) ** 2)
        return result
    }
}

const compareBMI = (person1, person2) => {
    if (person1.bmi() > person2.bmi()) {
        console.log(`${person1.fullName} has higher BMI ${person1.bmi()}.`)
    } else if (person1.bmi() < person2.bmi()) {
        console.log(`${person2.fullName} has higher BMI ${person2.bmi()}.`)
    } else {
        console.log("It is impossible to decide whose BMI is higher.")
    }
}

compareBMI(john, jane)