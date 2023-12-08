# 《Python编程从入门到实践》学习笔记(变量和简单的数据类型)

## 1. 变量
在Python中，变量是用于存储数据值的标识符。变量在程序中用于保存和引用数据，使得开发者可以在代码中操作数据而不必直接使用数据的实际值。在Python中，定义变量的基本语法如下：
variable_name = value
其中：
variable_name 是变量的名称，可以根据需要选择一个合适的名称。
value 是存储在变量中的数据值。

在程序中，可随时修改变量的值，而Python将始终记录变量的最新值。

### 1.1 变量怎么命名
在使用变量时，需要遵守以下规则：

a, 变量名只能包含字母、数字和下划线。变量名能以字母或下划线打头，但不能以数字打头。

b, 变量名不能包含空格，但能适用下划线来分隔其中的单词。比如file
name会引发错误，file_name就不会有问题。

c, 不要将Python关键字和函数名用作变量名，否则会报错。Python关键字：False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield。

d, 变量名应既简短有有描述性，让人一看变懂。例如，name比n好。

e, 慎用小写字母l和大写字母O，因为它们可能被人错看成数字1和0。

### 1.2  变量的赋值符号
"=",就是变量的赋值符号，它的左边是变量名称，它的右边是变量的值。比如：A=28的含义是将数值28赋值给变量A。print(A)，显示的结果是28。

### 1.3 变量命名报错
通常有两种情况会产生命名报错：在使用变量前忘记给它赋值，在输入变量名时拼写不正确。

## 2. 字符串
字符串（string）就是一系列字符。在Python中，用引号引起来的都是字符串，其中的引号可以是单引号，也可以是是双引号：
“This is a string."
'This is also a string.'

### 2.1 使用方法修改字符串的大小写
title()，将每个单词的首字母改为大写；
upper(), 将所有字母都改为大写；
lower(), 将所有字母都改为小写；

### 2.2 在字符串中使用变量
要在字符串中插入变量的值，可先在左引号前加上字母f，再将要插入的变量放在花括号内。这样，Python在显示字符串时，将把每个变量都替换为其值。
first_name = "Sylvia"
last_name = "Fan"
full_name = f"{first_name} {last_name}"
print(f"Hello, {full_name.title()}")
运行结果是Hello, Sylvia Fan

### 2.3 处理字符串上下左右的空白
在编程中，空白泛指任何非打印字符，如空格、制表符和换行符。
\t，空格，和按空格键效果差不多。
\n, 换行。
lstrip()，删除字符串左端的空白。
rstrip()，删除字符串右端的空白。
strip()，同时删除字符串两端的空白。
removeprefix()，删除字符串的前缀。

## 3. 数
整数，可以进行加(+)、减(-)、乘(*)、除(/)、乘方(**)运算。
浮点数（带小数点的数）。

## 4. 常量
常量是在程序的整个生命周期内都保持不变的变量。