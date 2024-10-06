//> ████████████████████████████████████  PREAMBLE

"use strict";

//> ████████████████████████████████████  INITIAL VARIABLES

const display = document.getElementById("calculator__display");

display.value = 0;

let isZero = true;

//>  ████████████████████████████████████  FUNCTIONS

function appendToDisplay(input) {
switch (input) {
case '+':
case '/':
case '-':
case '*':
input = " " + input + " ";
}

if (isZero) {

isZero = false;

display.value = display.value.substring(1);


}

display.value += input;
}

function clearDisplay() {

display.value = 0;
refreshZero = true;

}

function calculate() {
try {
display.value = eval(display.value);

isZero = true;

}
catch(error) {
display.value = "Error";
}
}