

/*const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("block")
ball.style.backgroundColor = "yellow"
	
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
	
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Danny Brudner"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)
	
const moveUp = function () {
  const initialVal = parseInt(ball.style.top) || 0
  ball.style.top = (initialVal - 15) + "px"
}
  	
const moveLeft = function () {
  const initialVal = parseInt(ball.style.left) || 0
  ball.style.left = (initialVal - 15) + "px"
}
      	
const moveRight = function () {
  const initialVal = parseInt(ball.style.left) || 0
  ball.style.left = (initialVal + 15) + "px"
}
          	
const moveDown = function () {
  const initialVal = parseInt(ball.style.top) || 0
  ball.style.top = (initialVal + 15) + "px"
}

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const checkReservation = function () {
    const name = document.getElementById("name").value
    const lowerCaseName = name.toLowerCase()
    const editedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
    if (reservations[editedName] && !reservations[editedName].claimed) {
      alert("Welcome in, " + editedName)
      reservations[editedName].claimed = true
    } else if (reservations[editedName] && reservations[editedName].claimed) {
      alert("Hmm, someone already claimed this reservation")
    } else if (!reservations[editedName]) {
      alert("You have no reservation")
      reservations[editedName] = { claimed: true } 
    }
  }*/

  const getRandomColor = function () {
    const niceColors = ['#8e44ad', '#3498db', '#c0392b', '#f1c40f', '#d35400', '#2ecc71', '#1abc9c', '#2c3e50', '#7f8c8d'];
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  };
  
  
  for (let i = 1; i < 8; i++) {
    const newBox = document.createElement('div');
    newBox.setAttribute('class', 'box');
    newBox.style.backgroundColor = getRandomColor();
    newBox.onmouseenter = function () {
      const randomColor = getRandomColor();
      newBox.style.backgroundColor = randomColor;
    };
    document.getElementById('container').appendChild(newBox);
  }
  
  