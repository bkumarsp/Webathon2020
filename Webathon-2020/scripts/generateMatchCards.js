const createGame = () => {
    var gameLayout = document.getElementById("Layout");

    if (gameLayout.childElementCount) {
        alert('Game Already Started')
        return
    }
    resetInterval()
    timer()
        // localStorage.clear()
    localStorage.removeItem('cardInfo')

    var numberOfCards = document.getElementById("numberOfCards").value;

    //clear the board
    clearDeck();

    var available_colors = {
        0: {
            color: 'crimson',
            count: 0
        },
        1: {
            color: 'lawngreen',
            count: 0
        },
        2: {
            color: 'yellow',
            count: 0
        }
    }

    let cardIndex = 0;

    for (let index = 0; index < numberOfCards;) {

        var randomValue = Math.ceil(Math.random() * 3) - 1;
        if ((available_colors[randomValue].count) < numberOfCards / Object.keys(available_colors).length) { //cards of same color can be upto 2 cards only (0 and 1 )

            var cardColorValue = available_colors[randomValue].color

            var card = document.createElement("button");
            card.className = `card ${cardIndex}`;
            card.id = cardIndex;
            card.value = cardColorValue;
            card.setAttribute('data-set', '0')
            card.addEventListener('click', function() {
                gameColor(this.id);
            })

            gameLayout.appendChild(card);

            cardIndex++;
            available_colors[randomValue].count++;
            index++;
        }
    }
}