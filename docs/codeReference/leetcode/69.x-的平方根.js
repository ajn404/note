/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.floor(Math.pow(x,0.5))
    if(x<1){
        return 0
    }
    if(x===4){return 2}

    if(x<4){
        return 1
    }


    for(let i =2;i<x;i++){
        if(x/i<i){
            return i-1
        }
    }

};
// @lc code=end

