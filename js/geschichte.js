document.addEventListener("DOMContentLoaded", loadDataFetch);

function loadDataFetch() {
  fetch("data/zeitstrahl.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((entry) => {
        const id = "y" + entry.jahrzehnt; // z. B. "y1950er"
        const container = document.getElementById(id);
        if (!container) {
          console.warn("Kein Container für:", id);
          return;
        }

        let html = "";
        entry.ereignisse.forEach((ev) => {
          html += `<p>${ev.jahr}: ${ev.beschreibung}</p>`;
        });

        container.innerHTML = html;
      });
    })
    .catch((err) => console.error("Fehler beim Laden:", err));
}

function toggleAccordion(button, id) {
  const panel = document.getElementById(id);
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}
