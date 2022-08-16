function getPrimeFactors(number) {
  const primeFactors = [];
  for (let divisor = 2; divisor <= number; divisor += 1) {
    for (; number % divisor === 0; number /= divisor) {
      primeFactors.push(divisor);
    }
  }
  return primeFactors;
}

module.exports = getPrimeFactors;
