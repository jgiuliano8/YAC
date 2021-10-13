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

function memBtnPressed(btn) {}

function fncBtnPressed(btn) {}

function numBtnPressed(btn) {}

function clrBtnPressed(btn) {}

function eqlsBtnPressed(btn) {}

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
