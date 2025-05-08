async function predict() {
  const player = document.getElementById("player").value;
  const stat = document.getElementById("stat").value;

  const response = await fetch("https://your-backend-name.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player, stat })
  });

  const data = await response.json();
  document.getElementById("result").innerText =
    `${data.player.toUpperCase()} - ${data.stat.toUpperCase()} → ${data.confidence}`;
}
