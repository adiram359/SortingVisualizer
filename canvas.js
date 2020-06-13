const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('.algobutton1').addEventListener('click', form1submission)

document.querySelector('.algobutton2').addEventListener('click', form2submission)

document.querySelector('.algobutton3').addEventListener('click', form3submission)




function form1submission(event) {
  event.preventDefault()
  var block = document.getElementById("001");
  var option = block.options[block.selectedIndex].value
  const details = {block: 1,
                    option:option}
  console.log(details)
  sort(details)
}

function form2submission(event) {
  event.preventDefault()
  var block = document.getElementById("002");
  var option = block.options[block.selectedIndex].value
  const details = {block: 2,
                    option:option}
  console.log(details)
  sort(details)
}

function form3submission(event) {
  event.preventDefault()
  var block = document.getElementById("003");
  var option = block.options[block.selectedIndex].value
  const details = {block: 3,
                    option:option}
  console.log(details)
  sort(details)
}




var c = canvas.getContext('2d');



function drawbars(nums) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  const y = 240
  var x = 240
  for (var i = 0; i < nums.length; i += 1) {
    c.fillStyle = nums[i].color
    c.fillRect(x, y - nums[i].value, 5, nums[i].value)
    x += 7
  }



}
