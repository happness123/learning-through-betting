let str = "Hello, World!";

// 访问字符串中的特定字符
console.log(str[0]); // 输出: H

// 获取字符串的长度
console.log(str.length); // 输出: 13

// 转换字符串为小写
console.log(str.toLowerCase()); // 输出: hello, world!

// 判断字符串是否包含某个子串
console.log(str.includes("World")); // 输出: true

// 使用正则表达式进行字符串匹配
let match = str.match(/l+/g);
console.log(match); // 输出: ["ll", "l"]

// 使用split方法分割字符串
let words = str.split(", ");
console.log(words); // 输出: ["Hello", "World!"]






