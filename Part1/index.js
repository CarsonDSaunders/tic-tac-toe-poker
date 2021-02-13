let gameProgress = []
let hasWinner = false;
let turnNum = 0;

function play( position ) {
    //Play current position
    let currentBox = document.getElementById(position);
    currentPlayer = document.getElementById('player')
    
    if (gameProgress[position] != undefined) {
        window.alert('That square has already been played! Please try again.')
        return;
    } else {
        if (currentPlayer.innerText === 'X') {
            currentBox.innerText = 'X';
            gameProgress[position] = 'X';
            currentPlayer.innerText = 'O';
            turnNum++;
        } else {
            currentBox.innerText = 'O';
            gameProgress[position] = 'O';
            currentPlayer.innerText = 'X';
            turnNum++;
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
                hasWinner = true;
                window.alert(`${topLeft} is the winner!`);
                gameLock();
                return;
            }
            if (middleLeft != undefined && middleLeft === middleCenter && middleLeft === middleRight) {
                hasWinner = true;
                window.alert(`${middleLeft} is the winner!`);
                gameLock();
                return;
            }
            if (bottomLeft != undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
                hasWinner = true;
                window.alert(`${bottomLeft} is the winner!`);
                gameLock();
                return;
            }
            if (topLeft != undefined && topLeft === middleLeft && topLeft === bottomLeft) {
                hasWinner = true;
                window.alert(`${topLeft} is the winner!`);
                gameLock();
                return;
            }
            if (topCenter != undefined && topCenter === middleCenter && topCenter === bottomCenter) {
                hasWinner = true;
                window.alert(`${topCenter} is the winner!`);
                gameLock();
                return;
            }
            if (topRight != undefined && topRight === middleRight && topRight === bottomRight) {
                hasWinner = true;
                window.alert(`${topRight} is the winner!`);
                gameLock();
                return;
            }
            if (topLeft != undefined && topLeft === middleCenter && topLeft === bottomRight) {
                hasWinner = true;
                window.alert(`${topLeft} is the winner!`);
                gameLock();
                return;
            }
            if ( topRight != undefined && topRight === middleCenter && topRight === bottomLeft) {
                hasWinner = true;
                window.alert(`${topRight} is the winner!`);
                gameLock();
                return;
            }
    }, 10); 

    
        //CAT Detector
        if (turnNum === 9 && hasWinner === false) {
                setTimeout(function() {
                    window.alert('CAT! Meow!');
                    gameLock();
                }, 100) 
            }
        }
    }

//Black Diamond!!
function resetGame() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`${i}`).innerText = '';
        document.getElementById(`${i}`).setAttribute('onclick', `play(${i})`);
        document.getElementById(`${i}`).setAttribute('style', 'background-color: #EEE');
        ;
    }
    gameProgress = [];
    turnNum = 0;
}

function gameLock() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`${i}`).setAttribute('onclick', '');
        document.getElementById(`${i}`).setAttribute('style', 'background-color: white');
    }
}