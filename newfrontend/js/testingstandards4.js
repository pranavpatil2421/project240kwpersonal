const regionTags = document.getElementById("region-tags");
const standardTags = document.getElementById("standard-tags");

// -----------------------------
// Update selected tags UI
// -----------------------------
function updateTags() {
  regionTags.innerHTML = "";
  standardTags.innerHTML = "";

  document.querySelectorAll(".region-box input:checked").forEach(cb => {
    const span = document.createElement("span");
    span.textContent = cb.value;
    regionTags.appendChild(span);
  });

  document.querySelectorAll(".card.grid input:checked").forEach(cb => {
    const span = document.createElement("span");
    span.textContent = cb.parentElement.textContent.trim();
    standardTags.appendChild(span);
  });
}

// Attach listeners
document.querySelectorAll("input[type=checkbox]").forEach(cb => {
  cb.addEventListener("change", updateTags);
});

updateTags();

// -----------------------------
// Save / Submit to backend
// -----------------------------
document.getElementById("submit-standards").addEventListener("click", async () => {

  const regions = [];
  const recommended = [];
  const preferred = [];

  document.querySelectorAll(".region-box input:checked")
    .forEach(cb => regions.push(cb.value));

  document.querySelectorAll(".grid div:first-child input:checked")
    .forEach(cb => recommended.push(cb.parentElement.textContent.trim()));

  document.querySelectorAll(".grid div:last-child input:checked")
    .forEach(cb => preferred.push(cb.parentElement.textContent.trim()));

  try {
    const response = await fetch("/testing-standards/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ regions, recommended, preferred })
    });

    if (!response.ok) {
      alert("Failed to save testing standards");
      return;
    }

    alert("Testing standards saved successfully");

    // Redirect to next module
    window.location.href = "/lab-selection";

  } catch (err) {
    console.error(err);
    alert("Server error while saving data");
  }
});

// -----------------------------
// Save as Draft (optional hook)
// -----------------------------
document.getElementById("save-draft").addEventListener("click", () => {
  alert("Draft saved (placeholder)");
});
