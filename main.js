function bar() {
  const min = 10
  const max = 200
  return {
    value: Math.floor(Math.random() * (max - min))  + min,
    color: "#F4D03F"
  }
}
const nums = []

generateArray()

function generateArray() {
  for (var i = 0; i < 100; i++) {
    nums.push(bar())
  }
}

drawbars(nums)


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function insertionSort(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    var min = arr[i].value
    var min_index = i

    for(var j = i; j < arr.length; j += 1) {
      if (arr[j].value < arr[min_index].value) {
        min = arr[j].value
        min_index = j
      }
    }
    temp = arr[i].value
    arr[i].value = arr[min_index].value
    arr[min_index].value = temp
    drawbars(arr)
    await sleep(50);
  }

}



function sort () {
  insertionSort(nums)
}
