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
            <h1>Por una caja de bombones...¿Quien dijo esa frase?</h1>
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
                
                <button type="button" class="btn btn-dark" id="answerButton">ANSWER</button>`;;

            optionsContainer.appendChild(optionsList);

            const answerButton = document.getElementById('answerButton');
            answerButton.addEventListener('click', checkAnswer);
        })
        .catch(error => {
            console.error("Hubo un error al generar la frase:", error);
        });
}

function checkAnswer() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let selectedAnswer = '';

    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedAnswer = radioButton.value;
        }
    });

    console.log("selectedAnswer:", selectedAnswer);
    console.log("currentQuote.author:", currentQuote.author); // Utilizar la cita almacenada

    const messageElement = document.getElementById('message');

    if (selectedAnswer === currentQuote.author) {
        messageElement.textContent = '¡Respuesta correcta!';
    } else {
        messageElement.textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
    }
}

document.addEventListener('DOMContentLoaded', generateQuote);
