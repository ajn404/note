/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a = s.split(" ");
    a = [...new Set(a)];
    return a[a.length-1]?a[a.length-1].length:a[a.length-2].length
};
// @lc code=end

