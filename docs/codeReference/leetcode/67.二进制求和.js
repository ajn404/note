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

    let lenA = arrA.length;
    let lenB = arrB.length;
    let len =(arrA.length>arrB.length)?arrA.length:arrB.length;
    if(len===arrA.length){
        for(let j = 0;j<len-lenB;j++){
            arrB.unshift(0)
        }
    }else{
        for(let j = 0;j<len-lenA;j++){
            arrA.unshift(0)
        }
    }

    let arrR = new Array(len);
    for(let i=len-1;i>=0;i--){
        let tempa = parseInt(arrA[i])||0;
        let tempb = parseInt(arrB[i])||0;
        arrR[i] = tempa+tempb
    }
    let flag =false;
    for(let i=len-1;i>=0;i--){
        if(flag){
            arrR[i]+=1;
            flag =false;
        }
        if(arrR[i]>=2){
            arrR[i] = arrR[i] - 2;
            flag =true
        }
    }

    if(flag){
        arrR.unshift(1)
    }



   return arrR.toString().replace(/,/g,"")

};
// @lc code=end

