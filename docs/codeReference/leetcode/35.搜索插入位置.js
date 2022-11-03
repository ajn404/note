/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    if(target<=nums[0]) return 0
        for(let i=0;i<len;i++){
            if(nums[i]===target){
                return i
            }
            if(i!==len-1&& nums[i]<target&&nums[i+1]>target){
                return i+1;
            }
        }

        return len
    
};
// @lc code=end

