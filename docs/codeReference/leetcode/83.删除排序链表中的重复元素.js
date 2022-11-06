/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if(head===null) return null;
    let arr =[];
    while(head!==null){
        arr.push(head.val);
        head = head.next;
    }
    arr = [...new Set(arr)];

    let resHead = new ListNode(arr[0])
    let res = resHead;
    for(let i=1;i<arr.length;i++){
        res.next = new ListNode(arr[i]);
        res = res.next
    }
    return resHead;


};
// @lc code=end

