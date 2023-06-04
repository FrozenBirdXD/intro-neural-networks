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

// Define the number of layers and neurons in each layer
const layers = [5, 3, 3, 2];

// Get the neural network container element
const networkContainer = document.getElementById('neural-network');

// Create the layers and neurons dynamically
for (let i = 0; i < layers.length; i++) {
  const layer = document.createElement('div');
  layer.className = 'layer';

  for (let j = 0; j < layers[i]; j++) {
    const neuron = document.createElement('div');
    neuron.className = 'neuron';
    layer.appendChild(neuron);
  }

  networkContainer.appendChild(layer);
}
