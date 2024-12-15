async function getAIResponse() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  const apiKey = "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"; // ضع هنا مفتاح OpenAI الخاص بك
  const assistantId = "asst_xVWEQ1KzJacZaFiB3wdlfPVz"; // ضع معرف المساعد الخاص بك

  responseDiv.innerHTML = "جاري التحميل...";

  try {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        input: userInput
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    responseDiv.innerHTML = `<strong>الإجابة:</strong> ${data.result}`;
  } catch (error) {
    responseDiv.innerHTML = `<strong>خطأ:</strong> ${error.message}`;
  }
}
