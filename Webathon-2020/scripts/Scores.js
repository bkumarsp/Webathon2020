const score = (time, totalCards) => {
    var scoreVariable = document.getElementById('scoreText')
    var currentScore = Math.ceil(2 * totalCards / Math.sqrt(time))
    scoreVariable.innerHTML = currentScore + Number(scoreVariable.innerHTML)
}