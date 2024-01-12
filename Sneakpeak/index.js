const farver = ["rød", "blå", "grøn", "gul", "lilla", "orange", "pink", "brun", "grå", "cyan"];
const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Vans",
    "Converse",
    "Under Armour",
    "ASICS",
    "Fila"
];


document.addEventListener('DOMContentLoaded', function () {
    const supportBox = document.getElementById('supportBox');
    const closeButton = document.getElementById('closeButton');

    // Function to show the support box
    function showSupportBox() {
        supportBox.style.display = 'block';
        // Run the chatbot when the support box is displayed
        runChatbot();
    }

    // Function to hide the support box
    function hideSupportBox() {
        supportBox.style.display = 'none';
    }

    // Show the support box after a delay (1 second in this case)
    setTimeout(showSupportBox, 1000);

    // Close button functionality
    closeButton.addEventListener('click', hideSupportBox);
});

function runChatbot() {
    const chatInput = document.createElement('input');
    const chatOutput = document.createElement('div');

    // Set some properties for the chat input
    chatInput.type = 'text';
    chatInput.placeholder = 'Skriv her...';

    // Set some styles for the chat output
    chatOutput.style.marginTop = '10px';

    // Append the input and output elements to the support box
    supportBox.appendChild(chatInput);
    supportBox.appendChild(chatOutput);

    // Dictionary for chatbot responses
    const responses = {
        "hej": `Hej, hvad kan jeg hjælpe med?`,
        "farve": `Alle vores farver er ${farver.join(' ')}`,
        "farver": `Alle vores farver er ${farver.join(' ')}`,
        "størrelse": `Vi har sneakers i alle størrelser. Hvad er din sædvanlige størrelse?`,
        "nye udgivelser": `Har du set vores seneste udgivelser? Vi har nogle fantastiske nye sneakers på lager.`,
        "rabatter": `Vi har aktuelle rabatter på udvalgte sneakers. Er der noget specifikt, du leder efter?`,
        "returpolitik": `Vores returpolitik giver dig mulighed for at returnere sneakers inden for 30 dage. Har du brug for mere information?`,
        "anbefalinger": `Kan jeg hjælpe med at anbefale nogle sneakers baseret på din stil eller præferencer?`,
        "tilgængelighed": `Er der specifikke sneakers, du leder efter? Jeg kan tjekke deres tilgængelighed for dig.`,
        "brands": `Vi fører sneakers fra populære brands som ${brands.join(', ')}. Har du et foretrukket brand?`,
        "vedligeholdelse": `Hvordan plejer du normalt dine sneakers? Jeg kan give dig tips til vedligeholdelse.`,
        "bestilling": `Hvordan kan jeg hjælpe dig med din bestilling i dag?`,
        "udsalg": `Vi har nogle fantastiske tilbud i vores udsalg sektion. Er der noget specielt, du søger?`
    };
    

    // Main loop for the chatbot
    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const user_input = chatInput.value.toLowerCase();

            // Check if the user wants to exit
            if (user_input === "exit") {
                chatOutput.textContent = "Sneakpeak: Goodbye!";
                // Optional: You may want to remove the input and output elements after the conversation ends
                setTimeout(() => {
                    supportBox.removeChild(chatInput);
                    supportBox.removeChild(chatOutput);
                    hideSupportBox();
                }, 3000); // Adjust the delay as needed
            } else {
                const input_words = user_input.split(/\s+/);

                let keyword_found = false;
                for (const word of input_words) {
                    if (responses.hasOwnProperty(word)) {
                        const response = responses[word];
                        chatOutput.textContent = `Sneakpeak: ${response}`;
                        keyword_found = true;
                        break;
                    }
                }

                if (!keyword_found) {
                    chatOutput.textContent = "Sneakpeak: Kan jeg desværre ikke svare på";
                }
            }

            // Clear the input field after processing the user's input
            chatInput.value = '';
        }
    });
}