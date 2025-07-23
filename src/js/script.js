function copyAndToast() {
  const fullURL = `${window.location.origin}${window.location.pathname}`;

  navigator.clipboard.writeText(fullURL).then(() => {
    Toastify({
      text: "Copied!",
      duration: 2000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "rgba(80, 80, 80, 0.85)",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "10px 16px",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
    }).showToast();
  });
}

let totalSeconds = 24 * 3600; // mulai dari 24 jam

const el = document.getElementById("countdown");

const interval = setInterval(() => {
  if (totalSeconds <= 0) {
    el.textContent = "Waktu habis!";
    clearInterval(interval);
    return;
  }

  totalSeconds--;

  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");

  el.textContent = `Pilih dalam ${h}:${m}:${s}`;
}, 1000);
