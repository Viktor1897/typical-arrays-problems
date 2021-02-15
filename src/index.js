
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
  let arrAverage = 0;
  for (elem of array) {
    arrAverage += elem;
  }
  return arrAverage/array.length || 0;
}
