/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = [...new Set(nums)]
    for(let i = 0;i<res.length;i++){
        nums[i] = res[i]
    }
    return res.length
};
// @lc code=end

