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
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
