const wordList = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
const maxAttempts = 6;

let selectedWord = '';
let maskedWord = '';
let attempts = 0;
let guessedLetters = '';

const wordElement = document.getElementById('word');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const inputElement = document.getElementById('input');
const submitButton = document.getElementById('submit');

function startGame() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    maskedWord = '_'.repeat(selectedWord.length);
    attempts = 0;
    guessedLetters = '';

    wordElement.textContent = maskedWord;
    messageElement.textContent = '';
    attemptsElement.textContent = `Attempts left: ${maxAttempts}`;
}

function updateMaskedWord(letter) {
    let newMaskedWord = '';
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            newMaskedWord += letter;
        } else {
            newMaskedWord += maskedWord[i];
        }
    }
    maskedWord = newMaskedWord;
}

submitButton.addEventListener('click', () => {
    const letter = inputElement.value.toLowerCase();
    inputElement.value = '';

    if (!letter || guessedLetters.includes(letter)) return;

    guessedLetters += letter;

    if (selectedWord.includes(letter)) {
        updateMaskedWord(letter);
        wordElement.textContent = maskedWord;

        if (maskedWord === selectedWord) {
            messageElement.textContent = 'Congratulations! You won!';
            inputElement.disabled = true;
            submitButton.disabled = true;
        }
    } else {
        attempts++;
        attemptsElement.textContent = `Attempts left: ${maxAttempts - attempts}`;

        if (attempts === maxAttempts) {
            messageElement.textContent = `Game over! The word was "${selectedWord}".`;
            inputElement.disabled = true;
            submitButton.disabled = true;
        }
    }
});

startGame();
