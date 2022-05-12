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
  let counter = 0
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  var secondIntegerAsInt = parseInt(secondInteger)
  
  while (counter < secondIntegerAsInt) {
    console.log("Once through loop:" + counter)
    answer = firstIntegerAsInt - secondIntegerAsInt
    counter++
  }

  document.getElementById("answer").innerHTML = (firstInteger) + " ÷ " + (secondInteger) + " = " + (answer)
}
