/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null && list2 === null) return null;
    let l1 = [],l2 =[];
    while(list1!==null){
        l1.push(list1.val);
        list1 = list1.next
    }
    while(list2!==null){
        l2.push(list2.val);
        list2 = list2.next
    }

    let res =[...l1,...l2].sort((a,b)=>a-b)
    let head = new ListNode(res[0]);
    let resList = head;
    for(let i=1;i<res.length;i++){
        resList.next = new ListNode(res[i]);
        resList = resList.next
    }
    
    return head
};
// @lc code=end

