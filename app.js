var count = 0;
var element = document.getElementById("counter");

function increase() {
  count++;
  element.innerHTML = count;
}
function decrease() {
  count--;
  element.innerHTML = count;
}
function reset() {
  count = 0;
  element.innerHTML = "<mark>" + count + "<mark>";
}

function selectTheme(theme) {
  document.getElementsByTagName("body")[0].className = theme;
  document.getElementsByTagName("main")[0].className = theme;
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}