"use strict";

//The display element
const displayElem = document.getElementById("display");

//Memory button elements
const btnMemAdd = document.getElementById("memory-add");
const btnMemSub = document.getElementById("memory-sub");
const btnMemRecClr = document.getElementById("memory-recall-clear");
const btnClrDisp = document.getElementById("clear-display");

//Number button elements
const btnNumDblZero = document.getElementById("dbl-zero");
const btnNumZero = document.getElementById("zero");
const btnNumOne = document.getElementById("one");
const btnNumTwo = document.getElementById("two");
const btnNumThree = document.getElementById("three");
const btnNumFour = document.getElementById("four");
const btnNumFive = document.getElementById("five");
const btnNumSix = document.getElementById("six");
const btnNumSeven = document.getElementById("seven");
const btnNumEight = document.getElementById("eight");
const btnNumNine = document.getElementById("nine");

//Function button elements
const btnFuncDiv = document.getElementById("division");
const btnFuncMult = document.getElementById("multiplication");
const btnFuncSqrt = document.getElementById("sqrt");
const btnFuncPerc = document.getElementById("percent");
const btnFuncMin = document.getElementById("minus");
const btnFuncPosNeg = document.getElementById("pos-neg");
const btnFuncPlus = document.getElementById("plus");
const btnFuncEql = document.getElementById("equals");

//State variables

//Keeps track if function button was last pressed
let fncBtnPrevPress = false;
//Keeps track if clear button was pressed once already
let clrBtnPrevPress = false;

//The number buttons translation object
const numBtns = {
  decimal: ".",
  "dbl-zero": "00",
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

//The function buttons translation object
const funcBtns = {
  division: "/",
  multiplication: "*",
  sqrt: "sqrt",
  minus: "-",
  plus: "+",
};

//The current equation object
let currentEquation = {};

// displayElem.innerHTML = "123456789012345678901";

//Functions to check display state
function isDisplayEmpty() {
  if (displayElem.innerHTML === "") return true;
  else return false;
}

function isDisplayMax() {
  if (displayElem.innerHTML.length >= 20) {
    return true;
  }
}

function checkDisplay() {
  //Alert if display is empty
  if (isDisplayEmpty()) {
    alert("Display is empty. No number to perform function on!");
    return true;
  }

  //Alert if display is full of digits
  if (isDisplayMax()) {
    alert("Display Maxed out!");
    return true;
  }

  return false;
}

function memBtnPressed(btn) {}

function fncBtnPressed(btn) {
  fncBtnPrevPress = true;
  if (isDisplayEmpty()) {
    alert("Display is empty. No number to perform function on!");
    return;
  } else {
    currentEquation[displayElem.innerHTML] = btn;
  }
}

function prctBtnPressed() {
  //Check if display is empty or maxed out
  //Exit function if it is.
  if (checkDisplay()) return;

  //Otherwise, divide current number
  //in display by 100
  displayElem.innerHTML = Number(displayElem.innerHTML) / 100;
  fncBtnPrevPress = false;
  clrBtnPrevPress = false;
}

function sqrtBtnPressed() {
  //Check if display is empty or maxed out
  //Exit function if it is.
  if (checkDisplay()) return;

  //Otherwise, take square root of
  //current number in display
  displayElem.innerHTML = Math.sqrt(Number(displayElem.innerHTML));
  fncBtnPrevPress = false;
  clrBtnPrevPress = false;
}

function pnBtnPressed() {
  //Check if display is empty or maxed out
  //Exit function if it is.
  if (checkDisplay()) return;

  //Otherwise, reverse sign on current number
  //in display
  Number(displayElem.innerHTML) <= 0
    ? (displayElem.innerHTML = Math.abs(Number(displayElem.innerHTML)))
    : (displayElem.innerHTML = -1 * Number(displayElem.innerHTML));
}

function numBtnPressed(btn) {
  //Return if decimal clicked and display already has a decimal in it
  if (btn === "decimal" && displayElem.innerHTML.includes(".")) return;

  //Alert if display is full of digits
  if (isDisplayMax()) {
    alert("Display Maxed out!");
    return;
  }

  //If function button was previously clicked, clear display
  if (fncBtnPrevPress === true) {
    displayElem.innerHTML = "";
  }
  //Add digit or decimal to display
  displayElem.innerHTML += numBtns[btn];

  //Reset buttons pressed state variables
  fncBtnPrevPress = false;
  clrBtnPrevPress = false;
}

function clrBtnPressed() {
  fncBtnPrevPress = false;

  //Clear display if this is the first
  //time pressing C/CE
  if (!clrBtnPrevPress) {
    displayElem.innerHTML = "";
    alert("Display to be cleared. Press C/CE again to clear equation.");
    clrBtnPrevPress = true;
  }

  //Clear equation if this is the second
  //time pressing C/CE
  else {
    currentEquation = {};
    alert("Equation cleared.");
    clrBtnPrevPress = false;
  }
}

function eqlsBtnPressed() {
  fncBtnPrevPress = false;
}

document
  .querySelector(".calculator")
  .addEventListener("click", function (event) {
    const btnType = event.target.dataset.buttonType;
    const button = event.target.id;
    // console.log(event.target, event.currentTarget);
    console.log(btnType);
    switch (btnType) {
      case "memory":
        memBtnPressed(button);
        break;
      case "function":
        fncBtnPressed(button);
        break;
      case "percent":
        prctBtnPressed();
        break;
      case "sqrt":
        sqrtBtnPressed();
        break;
      case "pos-neg":
        pnBtnPressed();
        break;
      case "number":
        numBtnPressed(button);
        break;
      case "clear":
        clrBtnPressed();
        break;
      case "equals":
        eqlsBtnPressed();
        break;
    }
  });
