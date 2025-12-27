function factorialIter(n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log(result, i)
    result *= i;
  }
  return result;
}

console.log(factorialIter(5))