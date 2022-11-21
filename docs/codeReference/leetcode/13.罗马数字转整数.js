/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const relationList = [
        {
            label:'I',
            value:1
        },
        {
            label:'V',
            value:5
        },
        {
            label:'X',
            value:10
        },
        {
            label:'L',
            value:50
        },
        {
            label:'C',
            value:100
        },
        {
            label:'D',
            value:500
        },
        {
            label:'M',
            value:1000
        },
    ]

    const combineList = [
        {
            label:'A',
            value:4
        },
        {
            label:'B',
            value:9
        },
        {
            label:'H',
            value:40
        },
        {
            label:'J',
            value:90
        },
        {
            label:'E',
            value:400
        },
        {
            label:'F',
            value:900
        },
    ]

    const allList = [...relationList,...combineList];

    const mapObj = {}

    allList.forEach(item=>{
        mapObj[item.label] = item.value
    })

    s=s.replace(/IV/g,'A');
    s=s.replace(/IX/g,'B');
    s=s.replace(/XL/g,'H');
    s=s.replace(/XC/g,'J');
    s=s.replace(/CD/g,'E');
    s=s.replace(/CM/g,'F');
    console.log(s)
    let res = 0;

    for(let i = 0;i<s.length;i++){
        res+=mapObj[s[i]]
    }

    return res


};
// @lc code=end

