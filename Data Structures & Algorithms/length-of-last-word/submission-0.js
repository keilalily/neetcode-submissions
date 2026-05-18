class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const sentence = s.trim();
        let count = 0;
        for (let i = sentence.length - 1; i >= 0; i--) {
            if (sentence[i] === " ") break;
            count++
        }

        return count;
    }
}
