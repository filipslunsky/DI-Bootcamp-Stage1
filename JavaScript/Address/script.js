let addressNumber = 67
let addressStreet = "Bar Yehuda"
let country = "Israel"

let globalAddress = "I live on " + addressNumber + " " + addressStreet + ", " + country
console.log(globalAddress)

const displayAddress = () => {
    p = document.getElementById("address");
    p.innerHTML = globalAddress;
}

