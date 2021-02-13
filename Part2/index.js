let cardID = document.getElementById('cardID');
let cardStyle = document.getElementById('cardStyle');

function setCard() {
    let card = document.getElementById(cardID.value);
    card.style.color = cardStyle.value;
    console.log(card);
}