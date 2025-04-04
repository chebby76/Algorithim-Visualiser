const visualizationArea = document.getElementById('visualizationArea');
const startSortButton = document.getElementById('startSort');
const generateArrayButton = document.getElementById('generateArray');
const resetButton = document.getElementById('reset');
const arraySizeInput = document.getElementById('arraySize');
const speedInput = document.getElementById('speed');

let array = [];
let speed = 300;

// Generate random array
function generateArray(size) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    renderArray();
}

// Render array as bars
function renderArray() {
    visualizationArea.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 3}px`; // Scale for visibility
        visualizationArea.appendChild(bar);
    });
}

// Bubble Sort Visualization
async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Mark current elements
            markCurrent(j, j + 1);
            if (array[j] > array[j + 1]) {
                // Swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray();
                await
