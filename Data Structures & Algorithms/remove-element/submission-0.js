class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        let newArray = nums;
        
        for (let i = n - 1; i >= 0; i--) {
            if (nums[i] === val) {
                newArray.splice(i, 1)
            };
        }

        return newArray.length;
    }
}
