const emojis = ["💖", "💕", "🌸", "🩷", "🎀", "❤️", "🌷"];

function createHeart() {
  
  const heart = document.createElement("div");
  
  heart.className = "heart";
  
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  
  heart.style.left = Math.random() * 100 + "vw";
  
  heart.style.fontSize = (18 + Math.random() * 22) + "px";
  
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 11000);
  
}

setInterval(createHeart, 300);
