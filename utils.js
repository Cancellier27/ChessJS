const utils = {
  findPosition (className) {
    let minPosition = document.querySelector(".minPosition")
    let maxPosition = document.querySelector(".maxPosition")
    
    let rectMin = minPosition.getBoundingClientRect()
    let rectMax = maxPosition.getBoundingClientRect()
    let rect = className.getBoundingClientRect()
    
    let top = rectMax.top - rectMin.top  // 87.5%
    let left = rectMax.left - rectMin.left // 87,5%
    
    let elementTopPercentage = ((rect.top - rectMin.top) * 87.5) / top
    let elementLeftPercentage = ((rect.left - rectMin.left) * 87.5) / left
    
    return [parseFloat(elementTopPercentage.toFixed(1)), parseFloat(elementLeftPercentage.toFixed(1))]
    },

    boardCoordinate(piecePosition, oposite = 0) {
      const posNumbers = {0:"8", 12.5:"7", 25:"6", 37.5:"5", 50:"4", 62.5:"3", 75:"2", 87.5:"1"}
      const posLetters = {0:"a", 12.5:"b", 25:"c", 37.5:"d", 50:"e", 62.5:"f", 75:"g", 87.5:"h"}
      
      
      if (oposite === 0) {
        let number = posNumbers[piecePosition[0]]
        let letter = posLetters[piecePosition[1]]

        return letter + number

      } else if (oposite === 1) {
        let numbers = Object.entries(posNumbers)
        let letters = Object.entries(posLetters)
        let number
        let letter
        
        numbers.forEach(n => {
          if (n[1] === piecePosition[1]) {
            number = parseFloat(n[0])
          }
        })
        
        letters.forEach(l => {
          if (l[1] === `${piecePosition[0]}`) {
            letter = parseFloat(l[0])
          }
        })
        
        return [number, letter]
      }
    },

    movePiece(piece, toMoveCoord) {
      piece.style.top = `${toMoveCoord[0]}%`
      piece.style.left = `${toMoveCoord[1]}%`
    }
}

