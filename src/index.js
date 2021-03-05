
exports.min = function min (array) {

  if (array === undefined || array.length == 0) {
      return  array = 0;
    }else{
      array.sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else if (a == b) {
          return 0;
        }
      })
      return array[0]
    }
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) {
    return array = 0;
  } else {
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else if (a == b) {
        return 0;
      }
    })
    return array[array.length - 1]
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) {
    return array = 0;
  } else {
    let sum = array.reduce((previous, current, array) => {
      return previous+= current;
    }, 0)
    return sum/array.length;
  } 
}
