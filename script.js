async function getAIResponse() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  const apiKey = "sk-svcacct-BH8Oc8KwtWY3UaeP5n7aXE4_mJnj-wKlC02Z-eScb3uUiYpSMKEwnUj1Tvg6AKSXOT3BlbkFJi30cNH94wnQ_1xS2K1nQugUQ4b1l2xBWO1ByOAR6RAKOMwwMDq7kJZgzAMcF-PsAA"; // ضع هنا مفتاح OpenAI الخاص بك
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
