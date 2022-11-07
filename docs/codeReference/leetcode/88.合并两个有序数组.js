/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=m;i<(m+n);i++){
        nums1[i] = nums2[i-m];
    } 
    nums1 = nums1.sort((a,b)=>{return a-b})
    console.log(nums1)
};
// @lc code=end

