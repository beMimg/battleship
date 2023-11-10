/* eslint-disable no-console */
const error = (type) => {
  let errorMessage = '';
  if (type === 'occupied') {
    errorMessage += 'This coordenates are already occupied';
  } else if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  console.error(errorMessage);
  return errorMessage;
};

module.exports = error;
