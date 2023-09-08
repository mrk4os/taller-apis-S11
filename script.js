const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateQuotes);

function generateQuotes() {
    const numQuotes = 3; // Cambia este valor según la cantidad de citas que desees obtener.
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${numQuotes}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const quotesContainer = document.getElementById('quotes-container');
            quotesContainer.innerHTML = '';
            data.forEach(quoteData => {
                const quoteElement = document.createElement('p');
                const authorElement = document.createElement('p');

                quoteElement.textContent = quoteData.quote;
                authorElement.textContent = quoteData.author;

                quotesContainer.appendChild(quoteElement);
                quotesContainer.appendChild(authorElement);
            });
        })
        .catch(error => {
            console.error("Hubo un error al generar las frases:", error);
        });
}

document.addEventListener('DOMContentLoaded', loadQuotes);

