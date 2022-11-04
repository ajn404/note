/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // return(Number(digits.toString().replaceAll(",",""))+1).toString().split('')
    let sub=-1 ;
    //19999
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]!==9){
            sub =i
            break;
        }
    }
    if(sub!==-1){
        digits[sub]+=1;
        for(let j =sub+1;j<digits.length;j++){
            digits[j] = 0;
        }
    }
else{
    for(let k=0;k<digits.length;k++){
        digits[k] = 0
    }
    digits.unshift(1);

}

return digits
};
// @lc code=end

