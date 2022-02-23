
module.exports = function towelSort (matrix) {
  let sortArr = [];
  if (matrix !== undefined) { 
    for (let i = 0; i < matrix.length; i++) {
      (i % 2 !== 0) ? matrix[i].reverse() : false;
    }
  sort(matrix)
  function sort(matrix) {
    for (let item of matrix) {
      if (Array.isArray(item)) {
        sort(item)
      } else {
        sortArr.push(item);
      }
    }
    return sortArr;
  }
  return sortArr;
  } else {
    return [];
  }
}
