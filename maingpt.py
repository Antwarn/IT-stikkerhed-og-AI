import openai

openai.api_key = "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"

def chat_with_chatgpt(prompt, model="gpt-3.5-turbo"):
    response = openai.Completion.create(
        engine=model,
        prompt=prompt,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = response.choices[0].text.strip()
    return message

user_prompt = input("Chat: ")
chatbot_response = chat_with_chatgpt(user_prompt)
print(chatbot_response)
