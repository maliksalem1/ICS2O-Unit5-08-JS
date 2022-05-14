// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-JS/sw.js", {
    scope: "/ICS2O-Unit5-08-JS/",
  })
}

/**
 * This function displays an alert.
 */
function calculate() {
  // input
  var firstInteger = document.getElementById("first-integer").value
  var secondInteger = document.getElementById("second-integer").value

  // process
  var answer = 0
  var remainder = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  var secondIntegerAsInt = parseInt(secondInteger)
  var numberCountingDown = firstIntegerAsInt


  if ((firstIntegerAsInt > 0) && (secondIntegerAsInt > 0)) {
    while (numberCountingDown >= secondIntegerAsInt) {
      numberCountingDown = numberCountingDown - secondIntegerAsInt
      answer++
    }
  } else if ((firstIntegerAsInt < 0) && (secondIntegerAsInt < 0)) {
    numberCountingDown = Math.abs(numberCountingDown)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (numberCountingDown >= secondIntegerAsInt) {
      numberCountingDown = numberCountingDown - secondIntegerAsInt
      answer++
    }
  } else {
    numberCountingDown = Math.abs(numberCountingDown)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (numberCountingDown >= secondIntegerAsInt) {
      numberCountingDown = numberCountingDown - secondIntegerAsInt
      answer++
    }
    answer = -Math.abs(answer)
  }

  // output
  document.getElementById("answer").innerHTML = firstInteger + " ÷ " + secondInteger + " = " + answer + " R " + numberCountingDown
}
