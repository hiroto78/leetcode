// var maxProfit = function(prices) {
//     max = 0;
//     for (var i = 0; i < prices.length - 1; i++) {
//         for (var j = i; j < prices.length; j++) {
//             profit = prices[j] - prices[i];
//             if (max < profit) {
//                 max = profit;
//             }
//         }
//     }
//     return max;
// };

var maxProfit = function(prices) {
    max = 0;
    date_of_buy = 0
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[date_of_buy]) {
            // 最大 profit を更新
            max = (prices[i + 1] - prices[date_of_buy] > max) ? prices[i + 1] - prices[date_of_buy] : max;
        }
        if (prices[i + 1] < prices[date_of_buy]) {
            date_of_buy = i + 1
        }
    }
    return max;
};



console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
