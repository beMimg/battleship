import './style.css';

const createGrid = require('./grid');

const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
createGrid(playerContainer);
createGrid(computerContainer);
