module.exports = ("vibrate" in window.navigator) ?
function (pattern) {
  return window.navigator.vibrate(pattern);
} :
function () {
  return false;
};

