/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const returnarr = [];
  let min = Infinity;
  let minindex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      returnarr[i] = arr[i];
    } else {
      for (let k = i; k < arr.length; k++) {
        if (arr[k] < min && arr[k] !== -1) {
          min = arr[k];
          minindex = k;
        }
      }
      returnarr[i] = min;
      arr.splice[minindex];
    }
  }
  return returnarr;
}

module.exports = sortByHeight;
