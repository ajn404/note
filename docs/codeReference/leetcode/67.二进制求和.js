/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // const aA = parseInt(a,2);
    // const bA = parseInt(b,2);
    // return (aA+bA).toString(2)

    let arrA  = a.split("");
    let arrB = b.split("");
    let len =(arrA.length>arrB.length)?arrA.length:arrB.length;
    if(len===arrA.length){
        for(let j = 0;j<len-arrB.length;j++){
            arrB.unshift(0)
        }
    }else{
        for(let j = 0;j<len-arrA.length;j++){
            arrA.unshift(0)
        }
    }
    let arrR = new Array(len);
    for(let i=len-1;i>=0;i--){
        let tempa = parseInt(arrA[i])||0;
        let tempb = parseInt(arrB[i])||0;
        arrR[i] = tempa+tempb

        if(i<(len-1)){
            let before = parseInt(arrA[i+1])+parseInt(arrB[i+1]);
            console.log(before)
            if(before===2){
                arrR[i]+=1
            }
        }

        if(arrR[i]===2){
            arrR[i] = 0
            if(i===0){
                arrR.unshift(1)
            }
        }

    }

   return arrR.toString().replaceAll(",","")

};
// @lc code=end

