class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let result = false;

        for (const val of s) {
            const isOpen = /[\(\[\{]/.test(val);

            const isStandard = (v) => /[\(\)]/.test(v);
            const isCurly = (v) => /[\{\}]/.test(v);
            const isSquare = (v) => /[\[\]]/.test(v);

            if (isOpen) {
                stack.push(val);
            } else {
                const top = stack[stack.length - 1];
                if (isStandard(top) && isStandard(val)) {
                    stack.pop();
                    result = true;
                } else if (isCurly(top) && isCurly(val)) {
                    stack.pop();
                    result = true;
                } else if (isSquare(top) && isSquare(val)) {
                    stack.pop();
                    result = true;
                } else {
                    return false;
                }
            }
        }

        return stack.length > 0 ? false : result;
    }
}
