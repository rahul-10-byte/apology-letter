// Envelope Opening Animation
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('opened');
  }
  
  // Confetti Trigger
  function triggerConfetti() {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 }
    });
  }
  