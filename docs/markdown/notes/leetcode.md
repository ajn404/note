
## easy
### 两数之和
@[code](../../codeReference/leetcode/1.两数之和.js)
### 回文数
@[code](../../codeReference/leetcode/9.回文数.js)
### 罗马数字转整数
@[code](../../codeReference/leetcode/13.罗马数字转整数.js)
### 最长公共前缀
@[code](../../codeReference/leetcode/14.最长公共前缀.js)
:::tip
Accepted
124/124 cases passed (108 ms)
Your runtime beats 7.49 % of javascript submissions
Your memory usage beats 5.01 % of javascript submissions (47.2 MB)
:::
### 有效的括号
@[code](../../codeReference/leetcode/20.有效的括号.js)
:::tip
time 86.76% memory 32.67%
:::
### 合并两个有序链表
@[code](../../codeReference/leetcode/21.合并两个有序链表.js)
:::tip
js sort方法默认按字母顺序排，排序数字需要传递方法
:::
### 26.删除有序数组中的重复项
@[code](../../codeReference/leetcode/26.删除有序数组中的重复项.js)

### 27.移除元素
@[code](../../codeReference/leetcode/27.移除元素.js)
:::tip
数组的splice操作会改变原数组;另外使用oldArr.splice(0,0,...newArr)可以合并数组
:::

### 35.搜索插入位置
@[code](../../codeReference/leetcode/35.搜索插入位置.js)

### 58.最后一个单词的长度
@[code](../../codeReference/leetcode/58.最后一个单词的长度.js)
:::tip
time:93.82% memory 38.49%
:::
### 66.加一
@[code](../../codeReference/leetcode/66.加一.js)
:::tip
time:87.06% memory 38.01%
:::
### 67.二进制求和
@[code](../../codeReference/leetcode/67.二进制求和.js)

:::tip
好复杂<br/>
Accepted
294/294 cases passed (64 ms)
Your runtime beats 77.13 % of javascript submissions
Your memory usage beats 21.52 % of javascript submissions (43.2 MB)
:::

### 67 x-的平方根
@[code](../../codeReference/leetcode/69.x-的平方根.js)

:::tip
不如调用Math的方法
:::

### 70.爬楼梯
@[code](../../codeReference/leetcode/70.爬楼梯.js)

### 83.删除排序链表中的重复元素
@[code](../../codeReference/leetcode/83.删除排序链表中的重复元素.js)

### 88.合并两个有序数组

@[code](../../codeReference/leetcode/88.合并两个有序数组.js)


#### 二叉树
递归
```js
//前中后序排序
const preOrder =root=>{
    if(!root) return
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}
const inOrder =root=>{
    if(!root) return
    preOrder(root.left);
    console.log(root.val);
    preOrder(root.right);
}

const postOrder =root=>{
    if(!root) return
    preOrder(root.left);
    preOrder(root.right);
    console.log(root.val);
}
```


###