// Get the navbar links
var nav0 = document.getElementById('nav0');
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');

nav0.addEventListener('click', function () {
  window.location.href = 'index.html';
});

nav1.addEventListener('click', function () {
  window.location.href = 'netz1.html';
});

nav2.addEventListener('click', function () {
  window.location.href = 'netz2.html';
});

nav3.addEventListener('click', function () {
  window.location.href = 'netz3.html';
});

function toggleSquare(square) {
  square.classList.toggle("on");
  updateSquareText(square);
  updateNeuron(".neuron-middle1", getSquareValue1);
  updateNeuron(".neuron-middle2", getSquareValue2);
  updateNeuron(".neuron-middle3", getSquareValue3);
  updateNeuronOutput();
  drawLinesMiddle1();
  drawLinesMiddle2();
  drawLinesMiddle3();
  drawLinesOutput();
}

function updateNeuronOutput() {
  const neuronSquare = document.querySelector(".neuron-output");
  const filling = calculateFillingOutput();

  neuronSquare.style.background = `linear-gradient(to top, #6495ed ${filling}%, #ddd ${filling}% 100%)`;
}

function updateSquareText(square) {
  const statusText = square.querySelector(".status-text");
  statusText.textContent = square.classList.contains("on") ? "An" : "Aus";
}

function updateNeuron(neuronClass, getSquareValue) {
  const neuronSquare = document.querySelector(neuronClass);
  const filling = calculateFilling(getSquareValue);

  neuronSquare.style.background = `linear-gradient(to top, #6495ed ${filling}%, #ddd ${filling}% 100%)`;
}

function calculateFillingOutput() {
  const fillingMiddle1 = calculateFilling1();
  const fillingMiddle2 = calculateFilling2();
  const fillingMiddle3 = calculateFilling3();

  let filling = fillingMiddle1 + fillingMiddle2 - 33 + fillingMiddle3 - 66;

  return filling;
}

function calculateFilling(getSquareValue) {
  let filling = 50;

  const square1 = document.querySelector(".square1");
  const square2 = document.querySelector(".square2");
  const square3 = document.querySelector(".square3");
  const square4 = document.querySelector(".square4");

  if (square1.classList.contains("on")) {
    const square1Value = getSquareValue(square1);
    filling += square1Value;
  }

  if (square2.classList.contains("on")) {
    const square2Value = getSquareValue(square2);
    filling += square2Value;
  }

  if (square3.classList.contains("on")) {
    const square3Value = getSquareValue(square3);
    filling += square3Value;
  }

  if (square4.classList.contains("on")) {
    const square4Value = getSquareValue(square4);
    filling += square4Value;
  }

  return filling;
}

function calculateFilling1() {
  return calculateFilling(getSquareValue1);
}

function calculateFilling2() {
  return calculateFilling(getSquareValue2);
}

function calculateFilling3() {
  return calculateFilling(getSquareValue3);
}

function getSquareValue1(square) {
  if (square.classList.contains("square1")) {
    return -15
  } else if (square.classList.contains("square2")) {
    return 20;
  } else if (square.classList.contains("square3")) {
    return -48;
  } else if (square.classList.contains("square4")) {
    return 15;
  }
}

function getSquareValue2(square) {
  if (square.classList.contains("square1")) {
    return -30;
  } else if (square.classList.contains("square2")) {
    return -20;
  } else if (square.classList.contains("square3")) {
    return 45;
  } else if (square.classList.contains("square4")) {
    return 5;
  }
}

function getSquareValue3(square) {
  if (square.classList.contains("square1")) {
    return 30;
  } else if (square.classList.contains("square2")) {
    return 10;
  } else if (square.classList.contains("square3")) {
    return -35;
  } else if (square.classList.contains("square4")) {
    return 20;
  }
}

function drawLine(context, startX, startY, endX, endY, color) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.stroke();
}

function drawLinesMiddle1() {
  const neuronMiddle1 = document.querySelector(".neuron-middle1");
  const canvas = document.getElementById("lines-canvas1");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const neuronRect = neuronMiddle1.getBoundingClientRect();
  const neuronX = neuronRect.left + neuronRect.width / 2;
  const neuronY = neuronRect.top + neuronRect.height;

  const square1 = document.querySelector(".square1");
  const square2 = document.querySelector(".square2");
  const square3 = document.querySelector(".square3");
  const square4 = document.querySelector(".square4");

  if (square1.classList.contains("on")) {
    const square1Rect = square1.getBoundingClientRect();
    const square1X = square1Rect.left + square1Rect.width / 2;
    const square1Y = square1Rect.top;

    drawLine(context, neuronX, neuronY, square1X, square1Y, "#FF7F50");
  }

  if (square2.classList.contains("on")) {
    const square2Rect = square2.getBoundingClientRect();
    const square2X = square2Rect.left + square2Rect.width / 2;
    const square2Y = square2Rect.top;

    drawLine(context, neuronX, neuronY, square2X, square2Y, "#6bdf8e");
  }

  if (square3.classList.contains("on")) {
    const square3Rect = square3.getBoundingClientRect();
    const square3X = square3Rect.left + square3Rect.width / 2;
    const square3Y = square3Rect.top;

    drawLine(context, neuronX, neuronY, square3X, square3Y, "#FF7F50");
  }

  if (square4.classList.contains("on")) {
    const square4Rect = square4.getBoundingClientRect();
    const square4X = square4Rect.left + square4Rect.width / 2;
    const square4Y = square4Rect.top;

    drawLine(context, neuronX, neuronY, square4X, square4Y, "#6bdf8e");
  }
}

function drawLinesMiddle2() {
  const neuronMiddle2 = document.querySelector(".neuron-middle2");
  const canvas = document.getElementById("lines-canvas2");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const neuronRect = neuronMiddle2.getBoundingClientRect();
  const neuronX = neuronRect.left + neuronRect.width / 2;
  const neuronY = neuronRect.top + neuronRect.height;

  const square1 = document.querySelector(".square1");
  const square2 = document.querySelector(".square2");
  const square3 = document.querySelector(".square3");
  const square4 = document.querySelector(".square4");

  if (square1.classList.contains("on")) {
    const square1Rect = square1.getBoundingClientRect();
    const square1X = square1Rect.left + square1Rect.width / 2;
    const square1Y = square1Rect.top;

    drawLine(context, neuronX, neuronY, square1X, square1Y, "#FF7F50");
  }

  if (square2.classList.contains("on")) {
    const square2Rect = square2.getBoundingClientRect();
    const square2X = square2Rect.left + square2Rect.width / 2;
    const square2Y = square2Rect.top;

    drawLine(context, neuronX, neuronY, square2X, square2Y, "#FF7F50");
  }

  if (square3.classList.contains("on")) {
    const square3Rect = square3.getBoundingClientRect();
    const square3X = square3Rect.left + square3Rect.width / 2;
    const square3Y = square3Rect.top;

    drawLine(context, neuronX, neuronY, square3X, square3Y, "#6bdf8e");
  }

  if (square4.classList.contains("on")) {
    const square4Rect = square4.getBoundingClientRect();
    const square4X = square4Rect.left + square4Rect.width / 2;
    const square4Y = square4Rect.top;

    drawLine(context, neuronX, neuronY, square4X, square4Y, "#6bdf8e");
  }
}

function drawLinesMiddle3() {
  const neuronMiddle3 = document.querySelector(".neuron-middle3");
  const canvas = document.getElementById("lines-canvas3");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const neuronRect = neuronMiddle3.getBoundingClientRect();
  const neuronX = neuronRect.left + neuronRect.width / 2;
  const neuronY = neuronRect.top + neuronRect.height;

  const square1 = document.querySelector(".square1");
  const square2 = document.querySelector(".square2");
  const square3 = document.querySelector(".square3");
  const square4 = document.querySelector(".square4");

  if (square1.classList.contains("on")) {
    const square1Rect = square1.getBoundingClientRect();
    const square1X = square1Rect.left + square1Rect.width / 2;
    const square1Y = square1Rect.top;

    drawLine(context, neuronX, neuronY, square1X, square1Y, "#6bdf8e");
  }

  if (square2.classList.contains("on")) {
    const square2Rect = square2.getBoundingClientRect();
    const square2X = square2Rect.left + square2Rect.width / 2;
    const square2Y = square2Rect.top;

    drawLine(context, neuronX, neuronY, square2X, square2Y, "#6bdf8e");
  }

  if (square3.classList.contains("on")) {
    const square3Rect = square3.getBoundingClientRect();
    const square3X = square3Rect.left + square3Rect.width / 2;
    const square3Y = square3Rect.top;

    drawLine(context, neuronX, neuronY, square3X, square3Y, "#FF7F50");
  }

  if (square4.classList.contains("on")) {
    const square4Rect = square4.getBoundingClientRect();
    const square4X = square4Rect.left + square4Rect.width / 2;
    const square4Y = square4Rect.top;

    drawLine(context, neuronX, neuronY, square4X, square4Y, "#6bdf8e");
  }
}

function drawLinesOutput() {
  const neuronOutput = document.querySelector(".neuron-output");
  const canvas = document.getElementById("lines-canvas5");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const square1 = document.querySelector(".square1");
  const square2 = document.querySelector(".square2");
  const square3 = document.querySelector(".square3");
  const square4 = document.querySelector(".square4");

  if (square1.classList.contains("on") || square2.classList.contains("on") || square3.classList.contains("on") || square4.classList.contains("on")) {
    const neuronRect = neuronOutput.getBoundingClientRect();
    const neuronX = neuronRect.left + neuronRect.width / 2;
    const neuronY = neuronRect.top + neuronRect.height;

    const middle1 = document.querySelector(".neuron-middle1");
    const middle2 = document.querySelector(".neuron-middle2");
    const middle3 = document.querySelector(".neuron-middle3");

    const middle1Rect = middle1.getBoundingClientRect();
    const square1X = middle1Rect.left + middle1Rect.width / 2;
    const square1Y = middle1Rect.top;
    drawLine(context, neuronX, neuronY, square1X, square1Y, "#6bdf8e");

    const middle2Rect = middle2.getBoundingClientRect();
    const square2X = middle2Rect.left + middle2Rect.width / 2;
    const square2Y = middle2Rect.top;
    drawLine(context, neuronX, neuronY, square2X, square2Y, "#FF7F50");

    const middle3Rect = middle3.getBoundingClientRect();
    const square3X = middle3Rect.left + middle3Rect.width / 2;
    const square3Y = middle3Rect.top;
    drawLine(context, neuronX, neuronY, square3X, square3Y, "#FF7F50");
  }
}

window.onload = function () {
  updateNeuron(".neuron-middle1", getSquareValue1);
  updateNeuron(".neuron-middle2", getSquareValue2);
  updateNeuron(".neuron-middle3", getSquareValue3);
  updateNeuronOutput();
};
