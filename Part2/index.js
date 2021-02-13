let cardID = document.getElementById('cardID');
let cardStyle = document.getElementById('cardStyle');

function setCard() {
    let card = document.getElementById(cardID.value);
    card.style.color = cardStyle.value;
    console.log(card);
}

//Black Diamond!
function resetCards() {
    document.getElementById('diamonds').setAttribute('style', 'color: grey')
    document.getElementById('clubs').setAttribute('style', 'color: grey')
    document.getElementById('hearts').setAttribute('style', 'color: grey')
    document.getElementById('spades').setAttribute('style', 'color: grey')
}