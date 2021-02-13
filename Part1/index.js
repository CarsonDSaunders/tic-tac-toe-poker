let gameProgress = []


function play( position ) {
    //Play current position
    let currentBox = document.getElementById(position);
    currentPlayer = document.getElementById('player');
    
    if (currentPlayer.innerText === 'X') {
        currentBox.innerText = 'X';
        gameProgress[position] = 'X';
        currentPlayer.innerText = 'O';
    } else {
        currentBox.innerText = 'O';
        gameProgress[position] = 'O';
        currentPlayer.innerText = 'X';
    }

    const topLeft = gameProgress[0];
    const topCenter = gameProgress[1];
    const topRight = gameProgress[2];
    const middleLeft = gameProgress[3];
    const middleCenter = gameProgress[4];
    const middleRight = gameProgress[5];
    const bottomLeft = gameProgress[6];
    const bottomCenter = gameProgress[7];
    const bottomRight = gameProgress[8];

    console.log(gameProgress);
    setTimeout(function() {
        if (topLeft != undefined && topLeft === topCenter && topLeft === topRight) {
            window.alert(`${topLeft} is the winner!`);
            return;
        }
        if (middleLeft != undefined && middleLeft === middleCenter && middleLeft === middleRight) {
            window.alert(`${middleLeft} is the winner!`);
            return;
        }
        if (bottomLeft != undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
            window.alert(`${bottomLeft} is the winner!`);
            return;
        }
        if (topLeft != undefined && topLeft === middleLeft && topLeft === bottomLeft) {
            window.alert(`${topLeft} is the winner!`);
            return;
        }
        if (topCenter != undefined && topCenter === middleCenter && topCenter === bottomCenter) {
            window.alert(`${topCenter} is the winner!`);
            return;
        }
        if (topRight != undefined && topRight === middleRight && topRight === bottomRight) {
            window.alert(`${topRight} is the winner!`);
            return;
        }
        if (topLeft != undefined && topLeft === middleCenter && topLeft === bottomRight) {
            window.alert(`${topLeft} is the winner!`);
            return;
        }
        if ( topRight != undefined && topRight === middleCenter && topRight === bottomLeft) {
            window.alert(`${topRight} is the winner!`);
            return;
        }
}, 10); 
    //CAT Detector
    if (gameProgress.length === 9) {
        let boardFull = true;
        for (let i = 0; i <= 8; i++) {
            if (typeof gameProgress[i] === 'undefined') {
                boardFull = false;
                break;
            } 

        }
        if (boardFull === true) {
            setTimeout(function() {
                window.alert('CAT! Meow!')}, 100) 
        }
    }
}

