document.addEventListener("DOMContentLoaded", function() {
    let myTable = document.getElementById("table-area");

    let color = "white";
    
    function getColor(e) {
        let computedElement = window.getComputedStyle(e.target);
        let newColor = computedElement.backgroundColor;
        color = newColor;
    }
    
    let color1 = document.getElementById("color-1");
    color1.addEventListener("click", getColor)

    let color2 = document.getElementById("color-2");
    color2.addEventListener("click", getColor)

    let color3 = document.getElementById("color-3");
    color3.addEventListener("click", getColor)

    let color4 = document.getElementById("color-4");
    color4.addEventListener("click", getColor)

    let color5 = document.getElementById("color-5");
    color5.addEventListener("click", getColor)

    let color6 = document.getElementById("color-6");
    color6.addEventListener("click", getColor)

    let color7 = document.getElementById("color-7");
    color7.addEventListener("click", getColor)

    let color8 = document.getElementById("color-8");
    color8.addEventListener("click", getColor)

    let color9 = document.getElementById("color-9");
    color9.addEventListener("click", getColor)

    let color10 = document.getElementById("color-10");
    color10.addEventListener("click", getColor)

    let color11 = document.getElementById("color-11");
    color11.addEventListener("click", getColor)

    let color12 = document.getElementById("color-12");
    color12.addEventListener("click", getColor)

    let color13 = document.getElementById("color-13");
    color13.addEventListener("click", getColor)

    let color14 = document.getElementById("color-14");
    color14.addEventListener("click", getColor)

    let color15 = document.getElementById("color-15");
    color15.addEventListener("click", getColor)

    let color16 = document.getElementById("color-16");
    color16.addEventListener("click", getColor)

    let color17 = document.getElementById("color-17");
    color17.addEventListener("click", getColor)

    let color18 = document.getElementById("color-18");
    color18.addEventListener("click", getColor)

    let color19 = document.getElementById("color-19");
    color19.addEventListener("click", getColor)

    let color20 = document.getElementById("color-20");
    color20.addEventListener("click", getColor)

    let color21 = document.getElementById("color-21");
    color21.addEventListener("click", getColor)

    function changeColor(e) {
        if (isMouseDown) {
            e.target.style.backgroundColor = color;
        }
    }

    function handleMouseDown() {
    isMouseDown = true;
    }

    function handleMouseUp() {
    isMouseDown = false;
    }

    

for (let i = 0; i < 24; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    myTable.appendChild(newRow);
    for (let j = 0; j < 60; j++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.addEventListener("mousedown", changeColor);
        newCell.addEventListener("mouseover", changeColor);
        newRow.appendChild(newCell);
        }
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    let isMouseDown = false;
    
    let myButton = document.getElementById("clear-button");
    myButton.addEventListener("click", function () {
        let cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "white";
        }
    })
    
});