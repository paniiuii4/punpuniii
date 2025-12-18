function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Isi username dan password!");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function simulateAI() {
  const results = [
    "Lingkungan Bersih 🌱",
    "Polusi Sedang ⚠️",
    "Polusi Tinggi 🚨"
  ];
  document.getElementById("result").innerText =
    results[Math.floor(Math.random() * results.length)];
}
