// Practice tasks from
// http://codingbat.com/java/Recursion-1

// Can generate stack overflow by using big numbers
function factorialSync(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else if (n == 1) {
    return 1;
  } else {
    return false;
  }
};

// Prevents stack overflow by using setTimeout
function factorialAsync(n, callback){
  _factorial(1, n, callback);
}

function _factorial(acc, n, callback){
  if (n == 0) {
    callback(acc);
  } else {
    let callback_wrapper = (result) => callback(result);
    setTimeout(() => _factorial(acc * n, n-1, callback_wrapper), 1);
  }
}

function fibonacci(n) {
  if (n > 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else if (n == 2) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else {
    return false;
  }
};

function array11(arr, i) {
  function sum(arr, i, s) {
    if (i <= arr.length - 1) {
      if (arr[i] == 11) {
        s += 1;
      }
      return sum(arr, i + 1, s);
    } else {
      return s;
    }
  };
  return sum(arr, i, 0);
};

// still WIP
function changePi(str) {
  if (/pi/.test(str)) {
    str.replace(/pi/, '3.14');
  } else {
    return str;
  }
  return changePi(str);
}

module.exports = {
  factorial: factorial,
  fibonacci: fibonacci,
  array11: array11,
  changePi: changePi
};