const updatePage = isUpdate => {
    document.getElementById('finalscore').innerHTML = localStorage.getItem('gameScore')
    var getscores = JSON.parse(localStorage.getItem('scores'))
    var table = document.getElementById('RankList')

    if (isUpdate) {
        while (table.lastChild && table.childElementCount > 1) {
            table.removeChild(table.lastChild)
        }
    }

    Object.keys(getscores).forEach((Name, index) => {
        var row = `<tr>
                    <td>${index}</td>
                    <td>${Name}</td>
                    <td>${getscores[Name]}</td>
            </tr>`

        table.innerHTML += row

    })
}


const saveScore = () => {
    var score = localStorage.getItem('gameScore')

    var nameField = document.createElement('input')
    nameField.className = 'namefield'
    nameField.placeholder = 'Your name...'
    var btn = document.createElement('button')
    btn.className = 'btn'
    btn.innerHTML = 'Save User'
    btn.addEventListener('click', () => {
        if (!nameField.value) {
            alert('Invalid Name')
            return
        } else {
            nameField.id = nameField.value
            var id = nameField.id
            if (localStorage.getItem('scores')) {
                var getscores = JSON.parse(localStorage.getItem('scores'))
                getscores[id] = score
                localStorage.setItem('scores', JSON.stringify(getscores))
            } else {
                var setScores = {}
                setScores[id] = score
                localStorage.setItem('scores', JSON.stringify(setScores))
            }
        }

        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 1750);

        document.getElementsByClassName('btn')[0].remove()
        document.getElementsByClassName('namefield')[0].remove()
        updatePage(true)


    })


    document.getElementById('SaveUser').appendChild(nameField)
    document.getElementById('SaveUser').appendChild(btn)
    document.getElementById('saveBtn').remove()

}

const home = () => {
    window.location.href = './Structure.html'
}