<script>
const cameraInput = document.getElementById("cameraInput");
const scanStatus = document.getElementById("scanStatus");
const scanLine = document.querySelector(".scan-line");

cameraInput.addEventListener("change", () => {
  // Démarrer animation
  scanLine.style.display = "block";
  scanStatus.textContent = "Analyse en cours... 🔍";

  // Simulation analyse (2,5 secondes)
  setTimeout(() => {
    scanLine.style.display = "none";
    scanStatus.textContent = "Validation réussie ✅";

    // Redirection vers page 4 (chat)
    setTimeout(() => {
      window.location.href = "chat.html";
    }, 1200);

  }, 2500);
});
</script>
