// ======================
// API HELPER
// ======================

async function apiGet(action, params = {}) {

  const query =
    new URLSearchParams({
      action,
      ...params,
      cache: Date.now()
    });

  const response =
    await fetch(`${GAS_URL}?${query}`);

  return await response.json();
}

async function apiPost(data = {}) {

  const response =
    await fetch(GAS_URL, {
      method: "POST",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body:
        JSON.stringify(data)
    });

  return await response.json();
}

// ======================
// UI HELPER
// ======================

function tampilInfo(pesan) {

  const area =
    document.getElementById("areaInfo");

  if (!area) return;

  area.textContent = pesan;

  area.classList.remove("hidden");
}

function adminInfo(pesan) {

  const area =
    document.getElementById("adminInfo");

  if (!area) return;

  area.textContent = pesan;

  area.classList.remove("hidden");
}

// ======================
// UTIL
// ======================

function escapeHtml(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function acakArray(arr) {

  return [...arr]
    .sort(() => Math.random() - 0.5);
}

function safeId(value) {

  return String(value ?? "")
    .replace(/[^a-zA-Z0-9_-]/g, "_");
}
