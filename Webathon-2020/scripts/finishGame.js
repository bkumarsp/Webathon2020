const gameOver = () => {
    if (!document.getElementById('Layout').childElementCount) {
        alert('No card played')
        return
    }
    resetInterval()

    var currscore = document.getElementById('scoreText').innerHTML
    localStorage.setItem('gameScore', currscore)
    window.location.href = './finalView.html'
}

const resetInterval = () => {
    if (myInterval)
        clearInterval(myInterval)
}