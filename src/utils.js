const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This coordenates are already occupied';
    console.error(errorMessage);
  }
  return errorMessage;
};

module.exports = error;
