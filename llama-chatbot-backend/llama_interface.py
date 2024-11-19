# llama_interface.py
import sys
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

def get_llama_response(message):
    model_name = "meta-llama/Llama-3.1-8B-Instruct"  # Replace with your actual model name/path

    # Load tokenizer and model
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)

    # Encode the input message
    inputs = tokenizer.encode(message, return_tensors='pt')

    # Generate a response
    outputs = model.generate(
        inputs,
        max_length=150,
        num_return_sequences=1,
        pad_token_id=tokenizer.eos_token_id,
        temperature=0.7,
        top_p=0.9,
        do_sample=True
    )

    # Decode the response
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("No message provided.")
        sys.exit(1)
    user_message = sys.argv[1]
    response = get_llama_response(user_message)
    print(response)

