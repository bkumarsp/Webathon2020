var elapsedTime = 0
var myInterval

const timer = () => {
    var startHour = 0
    var startMinute = 0
    var startSeconds = 0

    var hour = document.getElementById('Hour'),
        minute = document.getElementById('Minute'),
        second = document.getElementById('Seconds')

    myInterval = setInterval(t = () => {
        startSeconds++
        if (startSeconds > 59) {
            startMinute++
            startSeconds = 0
        }
        if (startMinute > 59) {
            startHour++
            startMinute = 0
        }
        hour.innerHTML = startHour
        minute.innerHTML = startMinute
        second.innerHTML = startSeconds

        elapsedTime++

    }, 1000);

}