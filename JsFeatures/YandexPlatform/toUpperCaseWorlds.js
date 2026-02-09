function capitalize(input) {
  // Ваш код здесь

  let result = ''
  for (let i = 0; i < input.length; i++) {
    if (i === 0 || input[i - 1] === ' ') {
      result += input[i].toUpperCase();
    } else {
      result += input[i]
    }
  }

  return result
};

console.log(capitalize('А роза упала на лапу Азора'))