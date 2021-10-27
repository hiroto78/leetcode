/**
 * 2分探索
 * @param Array arr ソート済みの探索対象配列
 * @param Int target 探索する値
 * @return Array 探索結果の添字 見つからなかった場合は-1を返す
 */
function binarySearch(arr, target) {
    let idx = -1;
    let iMin = 0;
    let iMax = arr.length - 1;
    while (iMin <= iMax) {
        console.log("--------------");
        console.log("iMin => " + iMin);
        console.log("iMax => " + iMax);
        let iMid = Math.floor((iMin + iMax) / 2);
        console.log(iMid);
        if (arr[iMid] === target) {
            idx = iMid;
            break;
        } else if (arr[iMid] < target) {
            iMin = iMid + 1;
        } else {
            iMax = iMid - 1;
        }
    }
    return [idx, iMin, iMax]
}

//
// sample
//
let data = [0,9,1,8,2,7,3,6,4,5,10].sort((a,b) => a-b)
// console.log(data)
// 0,1,2,3,4,5,6,7,8,9,10
let [idx, iMin, iMax] = binarySearch(data, 9)
console.log([idx, iMin, iMax])
