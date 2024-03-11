let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'apple', 2, 'banana', 3, 'orange', true, { name: 'John' }];
console.log(mixedArray) 


console.log(numbers[0]); // 输出: 1
console.log(fruits[1]); // 输出: banana

numbers.push(6); // 向数组末尾添加元素
fruits.unshift('grape'); // 向数组开头添加元素
console.log(numbers); // 输出: [1, 2, 3, 4, 5, 6]
console.log(fruits); // 输出: ['grape', 'apple', 'banana', 'orange']

numbers.pop(); // 删除数组末尾的元素
fruits.shift(); // 删除数组开头的元素
console.log(numbers); // 输出: [1, 2, 3, 4, 5]
console.log(fruits); // 输出: ['apple', 'banana', 'orange']

numbers[0] = 10; // 修改数组中的第一个元素为10
console.log(numbers); // 输出: [10, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  // 输出数组中的每个元素
  
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  // 输出数组中的每个元素，使用forEach方法
  
  let doubledNumbers = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubledNumbers);
  // 将数组中的每个元素都乘以2，并返回一个新的数组，输出: [20, 4, 6, 8, 10]
  