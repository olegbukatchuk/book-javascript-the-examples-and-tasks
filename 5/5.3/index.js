document.write("<h4>Массив</h4>");

var nums = new Array(10, true, 30, "текст", 75);

for (var k = 0; k < nums.length; k++) {
    document.write(nums[k] + " | ")
}