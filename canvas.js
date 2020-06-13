const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sortButton = document.querySelector('.algobutton')
console.log(sortButton)
sortButton.addEventListener('click', () => sort())



var c = canvas.getContext('2d');



function drawbars(nums) {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  const y = 500
  var x = 100
  for (var i = 0; i < nums.length; i += 1) {
    c.fillStyle = nums[i].color
    c.fillRect(x, y - nums[i].value, 5, nums[i].value)
    x += 10
  }


}
