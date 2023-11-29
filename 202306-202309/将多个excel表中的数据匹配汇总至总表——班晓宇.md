上一篇python学习笔记，解决的是一个较为基本的需求：将一个excel中的数据原封不动粘贴到另一个excel里，更具体地说，将一个excel中的数据按行（一行行）粘贴到另一个excel里。在实际工作中，我们可能还有稍微复杂一点的需求。

#### 一、需求

作为市分行的某个部门，有时我们需要让支行核实一些数据。以内部账户的使用为例，我们会下发几十条账户数据，让支行上报账户的「挂账金额、挂账日期、挂账原因」等等数据，有些支行可能涉及一条至多条数据，有些支行可能不涉及数据。我们下发的工作表如下，支行需要找到自己支行的账号，然后填写相关内容。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/7mVMRh2p9w3q5C17picjVEsibvialoA0CUFLd7231b8mzZxhBRvYU7GFAuIuF3j2DeeHiaOYmVSMkgm8ra4tGJrOjQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

作为汇总机构，在收到所有支行上报的excel后，通常的做法是：**打开某个支行的工作表-复制「挂账金额、挂账日期、挂账原因」这三个单元格的内容-打开汇总表-锁定该支行所在的位置并将已复制内容粘贴到相应的单元格**。

借助于python，我们可以无需做打开工作表并且复制粘贴的重复性操作，借助一段代码，让代码帮我们实现自动批量操作。

#### 二、思路

对我们已经保存在一个文件夹下的所有支行上报的excel工作簿，使用os.listdir()函数批量获取文件名称，然后用for循环逐个打开工作簿、工作表，再使用工作表对象的iter_rows()方法锁定我们需要的数据。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/7mVMRh2p9w3q5C17picjVEsibvialoA0CUF4CvhInahxwJBbEibpn2JHpY6S8kwQBo9VhYRWtZE9Y8wudwgOmsIYjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

然后重点来了，因为最终我们需要实现**数据匹配**操作。观察上面的两个工作表，可以看到两个表可以通过**账号**连接起来，也就是说，把一个表中**账号**对应的内容，匹配到另一个表中，就达成了我们的目的。

如何实现匹配？借助**字典**。

我们创建一个**{'账号':'挂账信息'}**的字典，可以很好地体现出**账号**与**挂账信息**的对应关系。更进一步，因为挂账信息涉及三方面内容，所以这里需要再嵌套一个字典，最终我们要创建的字典应该是**{'账号':{'挂账金额':aaa,'挂账日期':bbb,'挂账原因':ccc}}**这样的格式。

最后，我们借助字典中**键和值一一对应**的关系，通过为单元格赋值的方式（cell.value=新值）把字典中存储的「挂账金额、挂账日期、挂账原因」匹配入「汇总表」中的相应位置。

#### 三、我的代码

> import os
> from openpyxl import load_workbook
>
> #获取已经收集到的工作簿的路径
> path = 'D:/日常/code/风变编程/高效办公课/网点数据/'
> files = os.listdir(path)
> dict = {}
> for file in files:
>     file_path = path + file
>     
>     #打开已经收集到的工作簿及工作表
>     wb = load_workbook(file_path)
>     ws = wb.active
>         
>     #定位已收集到的工作表中需要的数据，并将其存储在字典中(字典形式为字典嵌套字典)
>     for row in ws.iter_rows(min_row = 2,values_only = True):
>         if row[2] is not None:
>             dict[row[0]]={
>                 '挂账金额':row[2],
>                 '挂账日期':row[3],
>                 '挂账原因':row[4]
>             }
>
> #打开最终用于汇总的工作簿及工作表
> total_wb = load_workbook('D:/日常/code/风变编程/高效办公课/网点数据/汇总.xlsx')
> total_ws = total_wb.active
>
> #将需要的数据通过字典的「键」匹配过来
> for row in total_ws.iter_rows(min_row = 2):
>     if row[0].value in dict: 
>         row[2].value = dict[row[0].value]['挂账金额']
>         row[3].value = dict[row[0].value]['挂账日期']
>         row[4].value = dict[row[0].value]['挂账原因']
>         
> total_wb.save('D:/日常/code/风变编程/高效办公课/网点数据/汇总.xlsx')



做了个视频，看起来直观一点~~~

