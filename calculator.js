"use strict";

const toInt = (x) => {
    return parseInt(x, 10);
};

const toFloat = (x) => {
    return parseFloat(x).toFixed(2);
}

function calculate() {
    const a = toInt(document.getElementById("a").value);
    const b = toInt(document.getElementById("b").value);
    const z = toInt(document.getElementById("z").value);

    const x = (a / (a + b));
    const y = (b / (a + b));

    const yourExpenses = toFloat((x * z));
    const partnerExpenses = toFloat((y * z));

    document.getElementById("result").style.visibility = "visible";
    document.getElementById("you").innerHTML = "You: " + yourExpenses;
    document.getElementById("yourPartner").innerHTML = "Your partner: " + partnerExpenses;
}