const chat = document.getElementById("chat");

async function sendMessage() {
  const input = document.getElementById("input");
  const userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<div><b>Você:</b> ${userText}</div>`;
  input.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();
  chat.innerHTML += `<div><b>Lyra:</b> ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
