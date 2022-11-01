/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    if(x===0){
        return true
    }
    let s = x.toString();
    let l = Math.ceil(s.length/2);

    for(let i=0;i<l;i++){
        if(s[i]!==s[s.length-1-i]){
            return false
        }
    }

    return true
};
// @lc code=end

