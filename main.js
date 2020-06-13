function bar() {
  const min = 10
  const max = 160
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
async function bubbleSort(arr) {
  for (var i = 0; i < arr.length ; i += 1) {
    for(var j = i; j > 0; j -= 1) {
      if (arr[j].value < arr[j - 1].value) {
        const temp = arr[j - 1].value
        arr[j - 1].value = arr[j].value
        arr[j].value = temp
      }
    }
    drawbars(arr)
    await sleep(50);
  }
}

async function mergeSort(arr, start, end) {

  // await drawbars(nums)
  // await sleep(20)

  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2)


  await mergeSort(arr, start, middle)
  await mergeSort(arr, middle + 1, end)

  const length1 = middle - start + 1;
  const length2 = end - middle;
  const L= new Array(length1);
  const R = new Array(length2);
  for (var i = 0; i < length1; i += 1)
      L[i] = {value: arr[start + i].value};
  for (var j = 0; j < length2; j += 1)
      R[j]= {value: arr[middle + j + 1].value};
  var i = 0
  var j = 0
  var k = start;
  while (i < length1 && j < length2) {
      if (L[i].value <= R[j].value) {
          arr[k].value = L[i].value;
          i += 1;
      }
      else {
          arr[k].value = R[j].value;
          j++;
      }
      k += 1;
  }
  while (i < length1) {
      arr[k].value = L[i].value;
      i += 1;
      k += 1;
  }
  while (j < length2) {
      arr[k].value = R[j].value;
      j += 1;
      k += 1;
  }
  await drawbars(nums)
  await sleep(50)

}


async function sort (details) {
  if (details.option === "Insertion Sort") {
    insertionSort(nums)
  }
  else if (details.option === "Bubble Sort") {
    bubbleSort(nums)
  }
  else if (details.option === "Merge Sort") {
    console.log(nums.map((ob) => ob.value))
    await mergeSort(nums, 0, nums.length - 1)
    console.log(nums.map((ob) => ob.value))
  }
}


async function countdown(num) {
  if (num === 0) {
    console.log(num)
    return;
  }
  await sleep(1000)
  console.log(num)
  countdown(num - 1)
}
