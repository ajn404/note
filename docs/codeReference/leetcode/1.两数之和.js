/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const res = [];
    for(let i = 0;i<nums.length;i++){
        let newArr = JSON.parse(JSON.stringify(nums));
        newArr.splice(i,1)
        if(newArr.includes(target-nums[i])){
            res.push(i) ;
            break;
        }
    }

    if(res.length>0){
        for(let j = 0;j<nums.length;j++){
            if(nums[j]===(target-nums[res[0]])&&j!==res[0]){
                res.push(j) ;
                break;
            }
        }
    }

    return res
    


};
// @lc code=end

