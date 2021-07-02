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
    'hola soy yo otra vez // ',
    'perdon por molestar // ',
    'se que no pertenezco a este lugar // ',
    'soy tan diferente a los demas // ',
    'este mundo para mi no tiene ningun sentido // ',
    'espero que mi muerte importe mas que mi vida // ',
    'y pueda mirar mas alla del sufrimiento // ',
    'aunque di mas de lo que soy // ',
    'aparentemente el problema soy siempre yo // ',
    'siempre he sentido que soy una carga // ',
    'odio despertar todos los dias // ',
    'deberia aguantar un dia mas // ',
    'para que seguir aqui // ',
    'a nadie le importo ni le importara // ',
    'no quiero morir pero necesito que el dolor termine // ',
    'callar las voces de mi cabeza // ',
    'es cansado pretender que todo esta bien // ',
    'odio todo lo que soy // ',
    'nadie me podra amar jamas // ',
    'la historia se repite una y otra vez // ',
    'cuando ya no este todo sera igual // ',
    'al final yo me voy pero ustedes aqui se quedan // ',
    'esto no lo hice yo lo hicieron ustedes // ',
    'es hora de desaparecer //',
    'perdon y adios // '
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
