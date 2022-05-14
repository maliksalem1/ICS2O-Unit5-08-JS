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

  // process and output
  var answer = 0
  var remainder = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  var secondIntegerAsInt = parseInt(secondInteger)
  var numberCountingDown = firstIntegerAsInt

  if (firstIntegerAsInt < 0)
    while (numberCountingDown <= secondIntegerAsInt) {
      console.log("Once through loop:" + answer)
      numberCountingDown = numberCountingDown + secondIntegerAsInt
      answer++
    } else {
      while (numberCountingDown >= secondIntegerAsInt) {
      numberCountingDown = numberCountingDown - secondIntegerAsInt
      answer++
      }
    }

  document.getElementById("answer").innerHTML = firstInteger + " ÷ " + secondInteger + " = " + answer + " R " + numberCountingDown
}
