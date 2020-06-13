const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('.algobutton1').addEventListener('click', form1submission)

document.querySelector('.algobutton2').addEventListener('click', form2submission)

document.querySelector('.algobutton3').addEventListener('click', form3submission)




function form1submission(event) {
  event.preventDefault()
  var block = document.getElementById("000");
  var option = block.options[block.selectedIndex].value
  const details = {block: 0,
                    option:option}
  console.log(details)
  sort(details)
}

function form2submission(event) {
  event.preventDefault()
  var block = document.getElementById("001");
  var option = block.options[block.selectedIndex].value
  const details = {block: 1,
                    option:option}
  console.log(details)
  sort(details)
}

function form3submission(event) {
  event.preventDefault()
  var block = document.getElementById("002");
  var option = block.options[block.selectedIndex].value
  const details = {block: 2,
                    option:option}
  console.log(details)
  sort(details)
}




var c = canvas.getContext('2d');



function drawbars(sortingObjects) {
  console.log(sortingObjects)
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  for (var i = 0; i < sortingObjects.length; i += 1) {
    const obj = sortingObjects[i]
    const nums = obj.nums
    const y = obj.y
    var x = Math.floor(window.innerWidth * 0.20)
    const gap = 1
    const width = (window.innerWidth * 0.6)/obj.count - gap
    for (var j = 0; j < nums.length; j += 1) {
      c.fillStyle = sortingObjects[i].color
      c.fillRect(x, y - nums[j].value, width, nums[j].value)
      x += width + gap
    }
  }
}
