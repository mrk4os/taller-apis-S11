let currentQuote;
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateQuote);


function generateQuote() {
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            currentQuote = data[0];
            const quoteElement = document.getElementById('quote');
            // const authorElement = document.getElementById('author'); 
            quoteElement.textContent = currentQuote.quote;
            // authorElement.textContent = newQuote.author; 

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';

            const optionsList = document.createElement('div');
            optionsList.innerHTML = `
            <h2>Por una caja de bombones...¿Quien dijo esa frase?</h2>
                <label class="options">
                    <input type="radio" name="radio" value="Walter White">
                    <span class="checkmark"></span>
                    Walter White
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Walter White Jr">
                    <span class="checkmark"></span>
                    Walter White Jr
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Jesse Pinkman">
                    <span class="checkmark"></span>
                    Jesse Pinkman
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Gustavo Fring">
                    <span class="checkmark"></span>
                    Gustavo Fring
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Mike Ehrmantraut">
                    <span class="checkmark"></span>
                    Mike Ehrmantraut
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Saul Goodman">
                    <span class="checkmark"></span>
                    Saul Goodman
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Skyler White">
                    <span class="checkmark"></span>
                    Skyler White
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Hank Schrader">
                    <span class="checkmark"></span>
                    Hank Schrader
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Badger">
                    <span class="checkmark"></span>
                    Badger
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="Tuco Salamanca">
                    <span class="checkmark"></span>
                    Tuco Salamanca
                </label>
                <label class="options">
                    <input type="radio" name="radio" value="The fly">
                    <span class="checkmark"></span>
                    The fly
                </label>
                
                <button type="button" class="btn btn-success" id="answerButton">ANSWER</button>`;;

            optionsContainer.appendChild(optionsList);

            const answerButton = document.getElementById('answerButton');
            answerButton.addEventListener('click', checkAnswer);
        })
        .catch(error => {
            console.error("Hubo un error al generar la frase:", error);
        });
}

const failImgs = [
    '<img src="imgs/fail1.jpg" alt="fail1">',
    '<img src="imgs/fail2.jpg" alt="fail2">',
    '<img src="imgs/fail3.jpg" alt="fail3">',
    '<img src="imgs/fail4.jpg" alt="fail4">',
    '<img src="imgs/fail5.jpg" alt="fail5">',
    '<img src="imgs/fail6.jpg" alt="fail6">',
    '<img src="imgs/fail7.gif" alt="fail7">',
    '<img src="imgs/fail8.gif" alt="fail8">'
];
//En un futuro quizas agregue mas imagenes, asi como agregar mas frases. 
const successImgs = [
    '<img src="imgs/success1.jpg" alt="success1">',
    '<img src="imgs/success2.jpg" alt="success2">',
    '<img src="imgs/success3.jpg" alt="success3">',
    '<img src="imgs/success4.jpg" alt="success4">',
    '<img src="imgs/success5.jpg" alt="success5">',
    '<img src="imgs/success6.jpg" alt="success6">',
    '<img src="imgs/success7.jpg" alt="success7">',
    '<img src="imgs/success8.jpg" alt="success8">'
]

function checkAnswer() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let selectedAnswer = '';

    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedAnswer = radioButton.value;
        }
    });
    /*
        console.log("selectedAnswer:", selectedAnswer);
        console.log("currentQuote.author:", currentQuote.author)
    */

    const messageElement = document.getElementById('message');
    const imgAnswer = document.getElementById('img-answer');

    if (selectedAnswer === currentQuote.author) {
        messageElement.textContent = '¡Respuesta correcta!';
        const randomIndexSuccess = Math.floor(Math.random() * successImgs.length);
        const randomImageSuccess = successImgs[randomIndexSuccess];
        imgAnswer.innerHTML = randomImageSuccess;

    } else {
        messageElement.textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
        const randomIndexFail = Math.floor(Math.random() * failImgs.length);
        const randomImageFail = failImgs[randomIndexFail];
        imgAnswer.innerHTML = randomImageFail;
    }

}

document.addEventListener('DOMContentLoaded', generateQuote);
