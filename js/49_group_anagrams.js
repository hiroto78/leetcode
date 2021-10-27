/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for (var i = 0; i < strs.length; i++) {
    const ana = strs[i].split('').sort().join('');
    if (map[ana]) {
      map[ana].push(strs[i]);
    } else {
      map[ana] = [];
      map[ana].push(strs[i]);
    }
  }
  let ans = [];
  for(var key in map) {
    ans.push(map[key]);
  }
  return ans;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
