var i = 0

const setCount = flippedCard => {

    if (localStorage.getItem('cardInfo')) {
        var prev = JSON.parse(localStorage.getItem('cardInfo'))
        if (prev.cardId === flippedCard.id) {
            // console.log('Same card clicked');
            return 0
        }
        if (Number(flippedCard.dataset.set) || Number(document.getElementById(prev.cardId).dataset.set)) {
            // console.log('open card clicked');
            return 0
        }
    }

    switch (i) {
        case 0:
            const firstCard = { cardValue: flippedCard.value, cardId: flippedCard.id, cardIsSet: flippedCard.dataset.set }
            localStorage.setItem('cardInfo', JSON.stringify(firstCard))
            break;

        case 1:
            var card1 = JSON.parse(localStorage.getItem('cardInfo'))
            var card2 = flippedCard;
            i = 0

            if (card1.cardValue === card2.value) {
                return 1
            } else {
                return -1
            }


        default:
            i = 0
            break;
    }

    i++

}


const gameColor = cardNum => {
    var gameCard = document.getElementById(cardNum)
    gameCard.style.backgroundColor = gameCard.value

    const result = setCount(gameCard)
    var prevCardInfo = JSON.parse(localStorage.getItem('cardInfo'))

    setTimeout(() => {
        if (result === 1) {
            gameCard.setAttribute('data-set', '1')
            document.getElementById(prevCardInfo.cardId).setAttribute('data-set', '1')
            localStorage.removeItem('cardInfo')
            const gameTime = elapsedTime
                //update score
            score(gameTime, Number(document.getElementById('numberOfCards').value))

        } else if (result === -1) {
            gameCard.style.backgroundColor = 'cyan'
            document.getElementById(prevCardInfo.cardId).style.backgroundColor = 'cyan'
            localStorage.removeItem('cardInfo')

        }

    }, 1000);


}