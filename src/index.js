module.exports = function reverse (n) {
    let a = Math.abs(n);
  let x = a.toString();
  x = [...x];
  let y = x.reverse();
  y = y.join('');
  return y;
}
