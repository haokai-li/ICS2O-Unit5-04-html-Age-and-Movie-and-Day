// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Age-and-Movie-and-Day

"use strict"

function enterClicked() {
  //input
  const age = parseInt(document.getElementById("age").value)
  const day = document.getElementById("day").value

  // process
  if (age < 5 || age > 95) {
    //free
    document.getElementById('answer').innerHTML = "You get in for free"
  } else if ((day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
    //student pricing
    document.getElementById('answer').innerHTML = "You are eligible for student pricing."
  } else {
    //regular price
    document.getElementById('answer').innerHTML = "You must pay regular price."
  }
}