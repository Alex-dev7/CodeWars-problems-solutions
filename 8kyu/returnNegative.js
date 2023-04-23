function makeNegative(num) {
  // Code?
  // 1
  // return Math.sign(num) === -1 ? num : -num
  // 2
  // return num < 0 ? num : -num
  // 3
  return -Math.abs(num)
}

  console.log(makeNegative(0))