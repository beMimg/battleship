const createGrid = (container) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridItem = document.createElement('div');
      gridItem.classList = 'gridItem';
      gridItem.dataset.x = i;
      gridItem.dataset.y = j;
      container.appendChild(gridItem);
    }
  }
};

module.exports = createGrid;
