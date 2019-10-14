'use strict';

const toTwoPlaces = x => {
  return Math.round(x * 1e2) / 1e2;
};

function clearForm() {
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
  document.getElementById('z').value = '';

  document.getElementById('result').classList.remove('expanded');
  document.getElementById('error-msg').style.visibility = 'hidden';
  document.getElementById('calculate-button').value = 'Caculate';
}

function calculate() {
  const a = toTwoPlaces(document.getElementById('a').value);
  const b = toTwoPlaces(document.getElementById('b').value);
  const z = toTwoPlaces(document.getElementById('z').value);

  if (!a || !b || !z) {
    document.getElementById('error-msg').style.visibility = 'visible';
  } else {
    document.getElementById('error-msg').style.visibility = 'hidden';

    const x = a / (a + b);
    const y = b / (a + b);

    const yourExpenses = toTwoPlaces(x * z);
    const partnerExpenses = toTwoPlaces(y * z);

    document.getElementById('result').classList.add('expanded');
    document.getElementById('you').innerHTML = 'Your share: ' + yourExpenses;
    document.getElementById('yourPartner').innerHTML =
      "Your partner's share: " + partnerExpenses;
    document.getElementById('calculate-button').value = 'recalculate';
  }
}
