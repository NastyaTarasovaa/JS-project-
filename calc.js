// ДОХОДЫ

// объявление поля для добавление новых инпутов с доходами

const newElementIncome = document.getElementsByClassName("newElementIncome")[0];

// объявление переменных в части "доходы" и "расходы"

let totalIncome = document.getElementById("totalIncome");
let totalExpenses = document.getElementById("totalExpenses");
let resultSum = 0;
let arrInput = [];
let arrCosts = [];
let cost1Value = 0;
let income1value = 0;
let accumulation = 0;
let totalPrecents = 0;
const totalMoneyMonth = document.getElementById("spendPerMonth");
const spendPerDay = document.getElementById("spendPerDay");
const totalPrecentEl = document.getElementById("total-precents");
let myMonthMoney = 0;

// добавление value в массив из инпута по умолчанию

function saveIncome1() {
    let income1value = document.getElementById("income1").value
    arrInput.push(income1value)
    console.log(arrInput)
    totalIncome.innerHTML = income1value;
};

// Запись расходов

function saveCost1() {
    let cost1Value = document.getElementById("firstCost").value
    arrCosts.push(cost1Value)
    console.log(arrCosts)
    totalExpenses.innerHTML = cost1Value;

    if (resultSum === 0) {
        myMonthMoney = (document.getElementById("income1").value) - cost1Value;
    } else {
        myMonthMoney = resultSum - cost1Value;
    }
    return myMonthMoney;
};

// добавление новых полей

function addItemIncome() {
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const inputChild = document.createElement("input");
    const inputParent = document.createElement("input");
    // const deleteIcon = document.createElement("i");

    divParent.className = "calculator__fields";
    divChild.className = "number-input";
    inputChild.className = "numper-input__label";

    divChild.appendChild(inputChild);

    inputParent.className = "numper-input__value";

    divChild.appendChild(inputParent);

    // deleteIcon.className = "fa-solid fa-xmark";
    // deleteIcon.style = `color: #71a8fb;
    // margin-top: 3px;`


    // divChild.appendChild(deleteIcon);

    divParent.appendChild(divChild);

    newElementIncome.appendChild(divParent);

    // Добавление данных в массив

    inputParent.onchange = function () {
        let data = inputParent.value;
        arrInput.push(data);
        console.log(arrInput);
        sumOfInputs();
        totalIncome.innerHTML = resultSum;

        // Удаление строки + элемента массива

        // deleteIcon.addEventListener("click", function(){
        //     arrInput.splice(arrInput.findIndex(function(e) { return e === inputParent.value}), 1);
        //     console.log(arrInput);
        //     divParent.remove();
        //     resultSum = +" ";
        //     totalIncome.innerHTML = sumOfInputs();
        //     })
    }
}

// Сумма данных инпутов

function sumOfInputs() {
    resultSum = arrInput.reduce(function (sum, elem) {
        return +sum + +elem;
    });
    console.log(resultSum)
}

// добавление значений range-input 
const moneyBoxRange = document.getElementById("money-box-range");
moneyBoxRange.addEventListener("input", e => {
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents();

    // Расходы минус доходы:
    let moneyMonth = myMonthMoney - accumulation;
    totalMoneyMonth.innerHTML = moneyMonth;
    console.log(moneyMonth);

    // Доступно в день:
    spendPerDay.innerHTML = (moneyMonth / 30).toFixed();

    document.getElementById('header-totalSaveMoney').innerHTML = spendPerMonth.innerHTML;

    class Calculator {
        constructor(income, costs, totalSaveMoney, moneyPerMonth, moneyPerDay) {
            this.income = income;
            this.costs = costs;
            this.totalSaveMoney = totalSaveMoney;
            this.moneyPerMonth = moneyPerMonth;
            this.moneyPerDay = moneyPerDay;
        }
    }

    let result = new Calculator(arrInput.join(", "), arrCosts.join(" "), totalPrecents, moneyMonth, spendPerDay.innerHTML);
    console.log(result);

    localStorage.setItem("result", JSON.stringify(result));

    function readResult() {
        const resultJSON = localStorage.getItem("result")

        if (resultJSON === null) {
            return undefined
        }
        try {
            return JSON.parse(resultJSON)
        } catch (e) {
            localStorage.removeItem("result")
            return undefined
        }
    }
    readResult();
})

let MoneyBox = document.getElementById("totalSaveMoney");

const calculationPrecents = () => {
    if (resultSum === 0) {
        accumulation = ((document.getElementById("income1").value) * totalPrecents / 100).toFixed()
    } else {
        accumulation = ((resultSum * totalPrecents) / 100).toFixed();
    }
    MoneyBox.innerHTML = accumulation;
};


// Очищение добавленных полей 

function deleteAll() {
    newElementIncome.remove();
    spendPerDay.innerHTML = 0;
    totalPrecentEl.innerHTML = 0;
    MoneyBox.innerHTML = 0;
    arrInput.length = 0;
    arrCosts.length = 0;
    let newIncome = document.getElementById("income1").value;
    totalIncome.innerHTML = newIncome;
    let newCost = document.getElementById("firstCost").value;
    totalMoneyMonth.innerHTML = +newIncome - +newCost;
}

// РАСХОДЫ

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
    deleteIcon.addEventListener("click", function () {
        deleteIcon.style.color = "lightgray";
        divParent.remove();
    })
    divChild.appendChild(deleteIcon);

    divParent.appendChild(divChild);

    newElementCosts.appendChild(divParent);
}


// КЛАСС
class Calculator {
    constructor(income, costs, moneyPerMonth, moneyPerDay) {
        this.income = income;
        this.costs = costs;
        this.moneyPerMonth = moneyPerMonth;
        this.moneyPerDay = moneyPerDay;
    }
}

let result = new Calculator(arrInput.join(", "), arrCosts.join(" "), myMonthMoney, spendPerDay.innerHTML);
console.log(result);