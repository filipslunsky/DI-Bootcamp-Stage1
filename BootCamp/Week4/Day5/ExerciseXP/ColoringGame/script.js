let myTable = document.getElementById("table-area");
console.log(myTable)

for (let i = 0; i < 24; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    myTable.appendChild(newRow);
    for (let j = 0; j < 60; j++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newRow.appendChild(newCell);
    }
}

