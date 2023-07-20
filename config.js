let rookL = document.querySelector(".blackRookLeft")
let rookR = document.querySelector(".blackRookRight")
let board = document.querySelector("#chessBoard")
let body = document.querySelector("body")

function move() {
  console.log("moved")
  // rook.style.border = "solid red 5px"

  console.log(findPosition(rookL))
  console.log(findPosition(rookR))

  // console.log(body.clientWidth)
  // console.log(board.clientWidth)
  // console.log(window.screenX)
  // console.log(window.screenY)

      // top                     left
  // [688,09033203125, 675.3125610351562] = 87.5%
  // [338.6111145019531, 325.8333435058594] - 0%

  // 98,2986188616071428
  // 488,38543701171875
}