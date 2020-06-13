function bar() {
  const min = 10
  const max = 160
  return {
    value: Math.floor(Math.random() * (max - min))  + min,
  }
}


const sortingObject1 = {
  nums: [],
  y: 240,
  count: 100,
  color: "#F4D03F"
}
const sortingObject2 = {
  nums: [],
  y: 500,
  count: (150 - 50),
  color: "#45B39D",
}

const sortingObject3 = {
  nums: [],
  y: 760,
  count: (150 - 50),
  color: "#E67E22"
}

var sortingObjects = [sortingObject1, sortingObject2, sortingObject3]

sortingObjects = sortingObjects.map((sortingObject) => generateArray(sortingObject))

function generateArray(sortingObject) {
    for (var j = 0; j < sortingObject.count; j += 1) {
      sortingObject.nums.push(bar())
    }
    return sortingObject

}

drawbars(sortingObjects)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function insertionSort(obj) {
  const arr = obj.nums
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
    drawbars(sortingObjects)
    await sleep(50);
  }
}
async function bubbleSort(obj) {
  const arr = obj.nums
  for (var i = 0; i < arr.length ; i += 1) {
    for(var j = i; j > 0; j -= 1) {
      if (arr[j].value < arr[j - 1].value) {
        const temp = arr[j - 1].value
        arr[j - 1].value = arr[j].value
        arr[j].value = temp
      }
    }
    drawbars(sortingObjects)
    await sleep(50);
  }
}


async function mergeSort(obj, start, end) {
  const arr = obj.nums
  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2)


  await mergeSort(obj, start, middle)
  await mergeSort(obj, middle + 1, end)

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
  drawbars(sortingObjects)
  await sleep(50)

}


async function sort (details) {
  const sortObject = sortingObjects[details.block - 1 + 1]
  console.log(details)
  if (details.option === "Insertion Sort") {
    insertionSort(sortObject)
  }
  else if (details.option === "Bubble Sort") {
    bubbleSort(sortObject)
  }
  else if (details.option === "Merge Sort") {
    mergeSort(sortObject, 0, sortObject.nums.length - 1)
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
