const clearDeck = () => {

    var layout = document.getElementById('Layout');
    while (layout.firstChild)
        layout.removeChild(layout.firstChild)
}

const gameReset = () => {
    if (!document.getElementById('Layout').childElementCount) {
        alert('Nothing to reset')
        return
    }
    if (confirm('Reset Current Game?')) {
        resetInterval()
        var hour = document.getElementById('Hour'),
            minute = document.getElementById('Minute'),
            second = document.getElementById('Seconds')

        hour.innerHTML = 0
        minute.innerHTML = 0
        second.innerHTML = 0

        document.getElementById('scoreText').innerHTML = 0
        clearDeck()
    } else {
        return;
    }




}