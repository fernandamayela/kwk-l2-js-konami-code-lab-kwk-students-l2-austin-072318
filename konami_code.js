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
  if (keyboardEvent === codes[body]) {
    index++;
    if (index === codes.length) {
      alert("Hurray!");
      //
      body = 0;
    }
    else {
      body = 0;
    }
  }
}
//
// function init() {
// }
//
let document.querySelector("Body")
//
body.addEventListener('keydown', function(e) {
  console.log(e.key)
})
