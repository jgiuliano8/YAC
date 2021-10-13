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

//The current equation object
let currentEquation = {};

// displayElem.innerHTML = "123456789012345678901";

function isDisplayEmpty() {
  if (displayElem.innerHTML === "") return true;
  else return false;
}

function memBtnPressed(btn) {}

function fncBtnPressed(btn) {
  fncBtnPrevPress = true;
  if (isDisplayEmpty) {
    alert("Display is empty");
  } else {
    alert("Display is not empty");
  }
}

function numBtnPressed(btn) {
  //Return if decimal clicked and display already has a decimal in it
  if (btn === "decimal" && displayElem.innerHTML.includes(".")) return;

  //If function button was previously clicked, clear display
  if (fncBtnPrevPress === true) {
    displayElem.innerHTML = "";
  } else {
    //Alert if display is full of digits/decimal
    if (displayElem.innerHTML.length >= 20) {
      alert("Display Maxed out!");
    } else {
      //Add digit or decimal to display
      displayElem.innerHTML += numBtns[btn];
    }
  }

  //Reset function button pressed state variable
  fncBtnPrevPress = false;
}

function clrBtnPressed(btn) {
  fncBtnPrevPress = false;
}

function eqlsBtnPressed(btn) {
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
      case "number":
        numBtnPressed(button);
        break;
      case "clear":
        clrBtnPressed(button);
        break;
      case "equals":
        eqlsBtnPressed(button);
        break;
    }
  });
