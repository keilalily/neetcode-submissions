class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const n = operations.length;
        let result = [];
        let total = 0;

        for (const value of operations) {
            const prevNum = Number(result[result.length - 1]);
            const secondPrevNum = Number(result[result.length - 2]);

            switch(value) {
                case "C":
                    result.pop();
                    break;
                case "D":
                    result.push(prevNum * 2);
                    break;
                case "+":
                    result.push(prevNum + secondPrevNum);
                    break;
                default:
                    result.push(value);
                    break;
            }
        }


        for (const value of result) {
            total += Number(value);
        }

        return total;
    }
}
