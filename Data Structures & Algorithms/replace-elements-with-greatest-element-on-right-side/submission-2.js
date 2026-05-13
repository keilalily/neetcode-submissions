class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        let max = -1;
        for (let i = n - 1; i >= 0; i--) {
            const current = arr[i];
            arr[i] = max;
            max = Math.max(max, current)
        }
        return arr;
    }
}
