import * as power from "./utils/functions";

const inputSquare = document.querySelector('.math-form [name="square"]');
const inputCube = document.querySelector('.math-form [name="cube"]');

function changeValue(event) {
    if (event.target.value == '')
        return;

    if (/^\d+$/.test(event.target.value)) {
        let number = Number(event.target.value);
        document.querySelector('.roots').innerHTML = `Square power of ${number} is: ${power.square(number)}`;
    } else {
        alert('Please, enter only numeric values.');
    }
}

inputSquare.addEventListener('keyup', changeValue);
inputCube.addEventListener('keyup', changeValue);