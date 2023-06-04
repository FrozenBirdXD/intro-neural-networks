function toggleSquare(square) {
    square.classList.toggle("on");
    updateSquareText(square);
    updateNeuronSquare();
    drawLines();
}

function getSquareValue(square) {
    if (square.classList.contains("square1")) {
        return 20;
    } else if (square.classList.contains("square2")) {
        return 20;
    } else if (square.classList.contains("square3")) {
        return -48;
    } else if (square.classList.contains("square4")) {
        return 20;
    }
}

function calculateFilling() {
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

function updateSquareText(square) {
    const statusText = square.querySelector(".status-text");
    statusText.textContent = square.classList.contains("on") ? "An" : "Aus";
}

function updateNeuronSquare() {
    const neuronSquare = document.querySelector(".neuron-square");
    const filling = calculateFilling();

    neuronSquare.style.background = `linear-gradient(to top, #6495ed ${filling}%, #ddd ${filling}% 100%)`;
}

function drawLines() {
    const neuronSquare = document.querySelector(".neuron-square");
    const canvas = document.getElementById("lines-canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const neuronRect = neuronSquare.getBoundingClientRect();
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

        context.beginPath();
        context.moveTo(neuronX, neuronY);
        context.lineTo(square1X, square1Y);
        context.strokeStyle = "#6bdf8e";
        context.lineWidth = 2;
        context.stroke();
    }

    if (square2.classList.contains("on")) {
        const square2Rect = square2.getBoundingClientRect();
        const square2X = square2Rect.left + square2Rect.width / 2;
        const square2Y = square2Rect.top;

        context.beginPath();
        context.moveTo(neuronX, neuronY);
        context.lineTo(square2X, square2Y);
        context.strokeStyle = "#6bdf8e";
        context.lineWidth = 2;
        context.stroke();
    }

    if (square3.classList.contains("on")) {
        const square3Rect = square3.getBoundingClientRect();
        const square3X = square3Rect.left + square3Rect.width / 2;
        const square3Y = square3Rect.top;

        context.beginPath();
        context.moveTo(neuronX, neuronY);
        context.lineTo(square3X, square3Y);
        context.strokeStyle = "#FF7F50";
        context.lineWidth = 2;
        context.stroke();
    }

    if (square4.classList.contains("on")) {
        const square4Rect = square4.getBoundingClientRect();
        const square4X = square4Rect.left + square4Rect.width / 2;
        const square4Y = square4Rect.top;

        context.beginPath();
        context.moveTo(neuronX, neuronY);
        context.lineTo(square4X, square4Y);
        context.strokeStyle = "#6bdf8e";
        context.lineWidth = 2;
        context.stroke();
    }

}

window.onload = function () {
    drawLines();
    updateNeuronSquare();
};



// Get the navbar links
var nav0 = document.getElementById('nav0');
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');

nav0.addEventListener('click', function () {
    window.location.href = '../index.html';
});

nav1.addEventListener('click', function () {
    window.location.href = '../html/netz1.html';
});

nav2.addEventListener('click', function () {
    window.location.href = '../html/netz2.html';
});

nav3.addEventListener('click', function () {
    window.location.href = '../html/netz3.html';
});


