document.write("<h4>Создание массива</h4>");

var nums = [10, true, 30, "текст", 75];

document.write(nums+"<br>");

for (var k in nums) {
    document.write(nums[k] + " | ");
}
