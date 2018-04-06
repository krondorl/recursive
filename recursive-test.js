var test = require('tape');
var r = require('./recursive');

test('factorial test', function (t) {
  t.equal(r.factorial(1), 1, 'factorial(1) == 1');  
  t.equal(r.factorial(3), 6, 'factorial(3) == 6');
  t.equal(r.factorial(4), 24, 'factorial(4) == 24');
  t.equal(r.factorial(5), 120, 'factorial(5) == 120');
  t.end();
});

test('fibonacci test', function (t) {
  t.equal(r.fibonacci(1), 1, 'factorial(1) == 1');
  t.equal(r.fibonacci(2), 1, 'factorial(2) == 1');  
  t.equal(r.fibonacci(3), 2, 'factorial(3) == 2');
  t.equal(r.fibonacci(4), 3, 'factorial(4) == 3');
  t.equal(r.fibonacci(5), 5, 'factorial(5) == 5');
  t.end();
});

test('array11 test', function (t) {
  t.equal(r.array11([1, 11], 0), 1, 'array11([1, 11], 0) == 1');
  t.equal(r.array11([1, 2, 11], 0), 1, 'array11([1, 2, 11], 0) == 1');
  t.equal(r.array11([11, 3, 11], 0), 2, 'array11([11, 3, 11], 0) == 2');
  t.end();
});