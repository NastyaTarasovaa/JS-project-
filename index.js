let totalIncome = document.getElementById("totalIncome");

// добавление инпутов доходов
const newElementIncome = document.getElementsByClassName("newElementIncome")[0];

let arr = [];

function addItemIncome() {
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const inputChild = document.createElement("input");
    const inputParent = document.createElement("input");
    const deleteIcon = document.createElement("i")

    divParent.className = "calculator__fields";
    divChild.className = "number-input";
    inputChild.className = "numper-input__label";

    divChild.appendChild(inputChild);

    console.log(divChild)

    inputParent.className = "numper-input__value";

    divChild.appendChild(inputParent);

    deleteIcon.className = "fa-solid fa-xmark";
    deleteIcon.style = `color: #71a8fb;
    margin-top: 3px;`
    deleteIcon.addEventListener("click", function(){
        deleteIcon.style.color = "lightgray";
        divParent.remove();
    })
    divChild.appendChild(deleteIcon);

    divParent.appendChild(divChild);

    newElementIncome.appendChild(divParent);

    // Добавление данных в массив

    inputParent.onchange = function() {
        let data = inputParent.value; 
        arr.push(data);
        console.log(arr);

        // Сумма данных инпутов

        let sum = 0;

        function sumOfInputs() {
            for (i = 0; i < arr.length; i++) {
            sum += +arr[i];
            }
            return sum;
            }
            sumOfInputs();
            totalIncome.innerHTML = sum;
        }


}



// добавление инпутов расходов

const newElementCosts = document.getElementsByClassName("newElementCosts")[0];

function addItemCosts() {

    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const inputChild = document.createElement("input");
    const inputParent = document.createElement("input");
    const deleteIcon = document.createElement("i")

    divParent.className = "calculator__fields";
    divChild.className = "number-input";
    inputChild.className = "numper-input__label";

    divChild.appendChild(inputChild);

    console.log(divChild)

    inputParent.className = "numper-input__value-expenses";
    inputParent.value = "";

    divChild.appendChild(inputParent);

    deleteIcon.className = "fa-solid fa-xmark";
    deleteIcon.style = `color: #71a8fb;
    margin-top: 3px;`
    deleteIcon.addEventListener("click", function(){
        deleteIcon.style.color = "lightgray";
        divParent.remove();
    })
    divChild.appendChild( deleteIcon);

    divParent.appendChild(divChild);

    newElementCosts.appendChild(divParent);
}



