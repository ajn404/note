/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    let arr = s.split("")
    let leftArr = ["(", "{", "["];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (leftArr.includes(arr[i]))
            temp.push(arr[i]);
        else {
            if (arr[i] === ")") {
                let r = temp.pop();
                if (r !== "(") {
                    return false
                }
            }
            if (arr[i] === "}") {
                let r = temp.pop();
                if (r !== "{") {
                    return false
                }
            }
            if (arr[i] === "]") {
                let r = temp.pop();
                if (r !== "[") {
                    return false
                }
            }
        }
    }


    return temp.length > 0 ? false : true
};
// @lc code=end

