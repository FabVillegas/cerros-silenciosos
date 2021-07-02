function showText(target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    } else {
        showText("#phrase", getPhrase(), 0, 500);
    }
}

function sirenAlarm() {
    const timerUntilSiren = Math.floor(Math.random() * (30 - 20) + 20);
    setTimeout(() => {
        document.getElementById('sirenSound').play();
        setTimeout(() => {
            startOtherworld();
        }, 30000);
    }, timerUntilSiren * 1000);
}

function startOtherworld() {
    document.getElementById('otherworldSound').play();
    showText("#phrase", getPhrase(), 0, 500);
    const maxMins = 3;
    const minMins = 2;
    const timerUntilTrigger = Math.floor(Math.random() * (maxMins - minMins + 1) + minMins);
    const triggerInterval = setInterval(() => {
        const min = 1;
        const max = 6;
        const selectedTrigger = Math.floor(Math.random() * (max - min + 1) + min);
        document.getElementById('triggerSound' + selectedTrigger).play();
    }, timerUntilTrigger * 60 * 1000);
    setTimeout(() => {
        clearInterval(triggerInterval);
    }, 900000);
}

const phrases = [
    'espero que mi muerte importe mas que mi vida ',
    'este mundo para mi no tiene ningun sentido ',
    'se que no pertenezco a este lugar '
];

function getPhrase() {
    const minPhrasesRange = 0;
    const maxPhrasesRange = phrases.length;
    const selectedIndex = Math.floor(Math.random() * (maxPhrasesRange - minPhrasesRange) + minPhrasesRange);
    return phrases[selectedIndex];
}

function queueMusic() {
    setTimeout(() => {
        document.getElementById('musicSound').play();
    }, 900000);
}

function startAmbience() {
    document.removeEventListener('click', startAmbience);
    document.getElementById('footstepsSound').play();
    sirenAlarm();
    queueMusic();
}

document.addEventListener('click', startAmbience);
