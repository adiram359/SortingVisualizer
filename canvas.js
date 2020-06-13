const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



function drawbars(nums) {
  c.fillStyle = '#3498DB'
  const y = 500
  var x = 100
  for (var i = 0; i < nums.length; i += 1) {
    c.fillRect(x, y - nums[i].value, 10, nums[i].value)
    x += 10
  }
  console.log('drawn all')


}
