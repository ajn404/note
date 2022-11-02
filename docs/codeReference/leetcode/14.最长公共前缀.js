/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min =strs[0].length ;
    let res=true;
    strs.forEach((item,index)=>{
        if(item[0]!==strs[0][0]){
            res =  false
        }
        let temp = twoSame(item,strs[0])||twoSame(strs[0],item)
        if(temp<min){
            min = temp
        }


    })

    return res?strs[0].slice(0,min):""
};

const twoSame=(s1,s2)=>{
    let temp = ""
    for(let i=0;i<s1.split("").length;i++){
        let item = s1.split("")[i];
        temp+=  item;
        if(s2.indexOf(temp)===-1){
            return i
        }  
    }
}

// @lc code=end

