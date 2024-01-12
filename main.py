# Simple Chatbot using Dictionaries
farver = ["rød", "grøn", "blå", "gul", "lilla", "orange", "pink", "brun", "cyan", "magenta"]

def simple_chatbot():
    # Dictionary for chatbot responses
    responses = {
        "farve": f"Alle vores farver er {' '.join(farver)}",
        "farver": f"Alle vores farver er {' '.join(farver)}"
    }

    # Main loop for the chatbot
    while True:
        user_input = input("You: ").lower()

        # Check if user wants to exit
        if user_input == "exit":
            print("Chatbot: Goodbye!")
            break
        
        input_words = user_input.split()

        keyword_found = False
        for word in input_words:
            if word in responses:
                response = responses[word]
                keyword_found = True
                break
        
        if not keyword_found:
            response = "Kan jeg desvære ikke svare på"

        # Print the chatbot's response
        print("Chatbot:", response)

# Run the chatbot
simple_chatbot()