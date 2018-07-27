const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
//
function onKeyDownHandler(e) {
  const keyboardEvent = e.key ;
  //
  if (keyboardEvent === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Hurray!");
      //
      index = 0;
    }
    else {
      index = 0;
    }
  }
}
//
// function init() {
// }
//
body.addEventListener('keydown', function(e) {
  console.log(e.key)
})
