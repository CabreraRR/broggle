console.log('ready')

const display = document.getElementById('display');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const quit = document.getElementById('quit');
const timer = document.getElementById('count');
const modal = document.getElementById('over');
const start = document.getElementById('start');

let activeLetters = [];
let wordList = [];
let points = [];
let counter = 10;
let score = 0;


//random letter generator
function randomLetter() {
    const possible = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Qu', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const num = Math.floor(Math.random() * 26);
    return possible[num];
}
//updates display as words are attempted
function updateDisplay() {
    display.innerHTML = activeLetters.join('');
}

function updateList() {
    const table = document.getElementById('list');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = activeLetters.join('');
    cell2.innerHTML = '0 points';
}

//populates board

function populate() {
    for (var i = 0; i < 15; i++) {
        const letterBox = document.getElementById(i);
        letterBox.innerHTML = randomLetter();
        letterBox.addEventListener('click', () => {
            activeLetters.push(letterBox.innerHTML)
            console.log(activeLetters);
            updateDisplay();
        })
    }
}

//Start Button Starts the timer
start.addEventListener('click', () => {
    activeLetters = [];
    wordList = [];
    points = [];
    counter = 10;
    updateTime();
    updateDisplay();
    populate();
})

//Timer Counts down from Game Start
function updateTime() {
    if (counter > 0) {
        timer.innerHTML = counter;
        --counter;
        setTimeout(updateTime, 1000);
    } else {
        modal.className = '.shown'
    }
}


//Submit button will check word against dictionary

submit.addEventListener('click', () => {
    if ($(this).hasClass('box-disabled')) {
        console.log('shit')
    }
    wordList.push(activeLetters.join(''));
    console.log(wordList);
    updateList();
    activeLetters = [];
    updateDisplay();
})

//clear button: to clear activeLetters
clear.addEventListener('click', () => {
    activeLetters = [];
    updateDisplay();
})

//Quit Open Game Over Modal