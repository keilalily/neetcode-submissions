class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const specialChars = /[^A-Za-z0-9]/g;
        const cleaned = s.replace(specialChars, "").toLowerCase();
        const reversed = cleaned.split("").reverse().join("");
        return cleaned === reversed;
    }
}
