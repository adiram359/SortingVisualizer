const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('.algobutton1').addEventListener('click', form1submission)

document.querySelector('.algobutton2').addEventListener('click', form2submission)

document.querySelector('.algobutton3').addEventListener('click', form3submission)

const callAll = () => {
  var block = document.getElementById("000");
  var option = block.options[block.selectedIndex].value
  const details = {block: 0,
                    option:option}
  sort(details)

  var block2 = document.getElementById("001");
  var option2 = block2.options[block2.selectedIndex].value
  const details2 = {block: 1,
                    option:option2}
  sort(details2)

  var block3 = document.getElementById("002");
  var option3 = block3.options[block3.selectedIndex].value
  const details3 = {block: 2,
                    option:option3}
  sort(details3)
}


document.querySelector('.visualize-All').addEventListener('click', callAll)

const slider1 = document.getElementById('num1')
slider1.oninput = function() {
  sortingObjects[0].count = slider1.value
  regenerate(0)

}

const slider2 = document.getElementById('num2')
slider2.oninput = function() {
  sortingObjects[1].count = slider2.value
  regenerate(1)

}

const slider3 = document.getElementById('num3')
slider3.oninput = function() {
  sortingObjects[2].count = slider3.value
  regenerate(2)

}


function form1submission(event) {
  event.preventDefault()
  var block = document.getElementById("000");
  var option = block.options[block.selectedIndex].value
  const details = {block: 0,
                    option:option}
  sort(details)
}

function form2submission(event) {
  event.preventDefault()
  var block = document.getElementById("001");
  var option = block.options[block.selectedIndex].value
  const details = {block: 1,
                    option:option}
  sort(details)
}

function form3submission(event) {
  event.preventDefault()
  var block = document.getElementById("002");
  var option = block.options[block.selectedIndex].value
  const details = {block: 2,
                    option:option}
  sort(details)
}




var c = canvas.getContext('2d');



function drawbars(sortingObjects) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  for (var i = 0; i < sortingObjects.length; i += 1) {
    const obj = sortingObjects[i]
    const nums = obj.nums
    const y = obj.y
    var x = Math.floor(window.innerWidth * 0.25)
    const gap = 1
    const width = (window.innerWidth * 0.6)/obj.count - gap
    for (var j = 0; j < nums.length; j += 1) {
      c.fillStyle = sortingObjects[i].color
      c.fillRect(x, y - nums[j].value, width, nums[j].value)
      x += width + gap
    }
  }
}
