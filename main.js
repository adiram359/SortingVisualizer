function bar() {
  const min = 10
  const max = 100
  return {
    value: Math.floor(Math.random() * (max - min))  + min,
    color: "#3498DB"
  }
}
const nums = []

generateArray()
console.log(nums)

function generateArray() {
  for (var i = 0; i < 100; i++) {
    nums.push(bar())
  }
}

drawbars(nums)
