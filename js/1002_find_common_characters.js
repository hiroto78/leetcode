/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // set mapping
    let mapping = [];
    for (var i = 0; i < words.length; i++) {
        mapping.push({});
    }

    for (var i = 0; i < words.length; i++) {
        let word = words[i].split('');
        for (var j = 0; j < word.length; j++) {
            if (!mapping[i][word[j]]) {
                mapping[i][word[j]] = 1
            } else {
                mapping[i][word[j]] = mapping[i][word[j]] + 1;
            }
        }
    }

    console.log(mapping);
    let ans = [];
    for (let key in mapping[0]) {
        let max = mapping[0][key];
        let ng = 0;
        for (let i = 1; i < mapping.length; i++) {
            if (!mapping[i][key]) {
                ng = 1;
                break;
            }
            if (max > mapping[i][key]) {
                max = mapping[i][key]
            }
        }
        if (!ng) {
            for (let i = 0; i < max; i++) {
                ans.push(key);
            }
        }
    }
    return ans;
};
// console.log(commonChars(["bella","label","roller"])); // ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); // ["e","l","l"]

