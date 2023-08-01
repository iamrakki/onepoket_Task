const readline = require('readline');

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter numbers separated by spaces: ', (input) => {
  const numbers = input.split(' ').map(Number);
  const result = sumArray(numbers);
  console.log('Sum:', result);

  rl.close();
});
