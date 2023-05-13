import openai
from flask import Flask, render_template, request, jsonify

openai.api_key = "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"

def chat_with_gpt(user_input):
    response = openai.Completion.create(
        engine = "text-davinci-002",
        prompt = f"User: {user_input}\nAT:",
        temperature=0.5,
        max_tokens=50,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    answer = response.choices[0].text.strip()
    return answer



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.form["user_input"]
    answer = chat_with_gpt(user_input)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)
