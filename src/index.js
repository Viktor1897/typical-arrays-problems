
exports.min = function min (array = []) {
  let minElem = 0;
  for (elem of array) {
    if (elem<minElem) minElem = elem;
  }
  return minElem;
}

exports.max = function max (array = []) {
  let maxElem = 0;
  for (elem of array) {
    if (elem>maxElem) maxElem = elem;
  }
  return maxElem;
}

exports.avg = function avg (array = []) {
  let arrSum = 0;
  for (elem of array) {
    arrSum += elem;
  }
  return arrSum/array.length || 0;
}
