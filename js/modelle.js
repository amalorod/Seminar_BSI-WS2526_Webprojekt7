const PorscheModelle = [
  {
    model: "356",
    country: "Deutschland",
    productionStart: 1948,
    productionEnd: 1965,
    bodyStyle: "Coupé / Cabriolet / Speedster",
    engine: "Vierzylinder-Boxer",
    displacement: "1.1–2.0 l",
    power: "40–130 PS",
    topSpeed: "ca. 200 km/h",
    image: "img/porsche356.jpg",
  },
  {
    model: "911 (Urmodell)",
    country: "Deutschland",
    productionStart: 1964,
    productionEnd: 1989,
    bodyStyle: "Coupé / Targa / Cabriolet",
    engine: "Sechszylinder-Boxer",
    displacement: "2.0–3.2 l",
    power: "110–231 PS",
    topSpeed: "ca. 245 km/h",
    image: "img/porsche911_classic.jpg",
  },
  {
    model: "914",
    country: "Deutschland",
    productionStart: 1969,
    productionEnd: 1976,
    bodyStyle: "Targa",
    engine: "Vierzylinder- oder Sechszylinder-Boxer",
    displacement: "1.7–2.0 l (Vierzylinder) / 2.0 l (Sechszylinder)",
    power: "80–110 PS",
    topSpeed: "ca. 200 km/h",
    image: "img/porsche914.jpg",
  },
  {
    model: "924",
    country: "Deutschland",
    productionStart: 1976,
    productionEnd: 1988,
    bodyStyle: "Coupé",
    engine: "Vierzylinder-Reihenmotor",
    displacement: "2.0–2.5 l",
    power: "95–177 PS",
    topSpeed: "ca. 240 km/h",
    image: "img/porsche924.jpg",
  },
  {
    model: "928",
    country: "Deutschland",
    productionStart: 1977,
    productionEnd: 1995,
    bodyStyle: "Coupé (2+2)",
    engine: "V8-Frontmotor",
    displacement: "4.5–5.4 l",
    power: "240–350 PS",
    topSpeed: "ca. 275 km/h",
    image: "img/porsche928.jpg",
  },
  {
    model: "944",
    country: "Deutschland",
    productionStart: 1982,
    productionEnd: 1991,
    bodyStyle: "Coupé / Cabriolet",
    engine: "Vierzylinder-Reihenmotor",
    displacement: "2.5–3.0 l",
    power: "163–250 PS",
    topSpeed: "ca. 260 km/h",
    image: "img/porsche944.jpg",
  },
  {
    model: "959",
    country: "Deutschland",
    productionStart: 1986,
    productionEnd: 1988,
    bodyStyle: "Coupé",
    engine: "Sechszylinder-Biturbo-Boxer",
    displacement: "2.85 l",
    power: "450 PS",
    topSpeed: "317 km/h",
    image: "img/porsche959.jpg",
  },
  {
    model: "968",
    country: "Deutschland",
    productionStart: 1992,
    productionEnd: 1995,
    bodyStyle: "Coupé / Cabriolet",
    engine: "Vierzylinder-Reihenmotor",
    displacement: "3.0 l",
    power: "240 PS",
    topSpeed: "250 km/h",
    image: "img/porsche968.jpg",
  },
  {
    model: "911 (Typ 993)",
    country: "Deutschland",
    productionStart: 1994,
    productionEnd: 1998,
    bodyStyle: "Coupé / Cabriolet / Targa",
    engine: "Sechszylinder-Boxer",
    displacement: "3.6–3.8 l",
    power: "272–450 PS",
    topSpeed: "275–300 km/h",
    image: "img/porsche993.jpg",
  },
];
function zeigeInfo(index, containerId) {
  const container = document.getElementById(containerId);
  const modelle = PorscheModelle[index];

  if (container.classList.contains("w3-hide")) {
    // Container ist versteckt → einblenden
    container.innerHTML = `
      <div class="w3-padding" style="color:white">
      <h2>${modelle.model}</h2>
        <p><b>Produktion:</b> ${modelle.productionStart} - ${modelle.productionEnd}</p>
        <p><b>Karosserie:</b> ${modelle.bodyStyle}</p>
        <p><b>Motor:</b> ${modelle.engine}</p>
        <p><b>Hubraum:</b> ${modelle.displacement}</p>
        <p><b>Leistung:</b> ${modelle.power}</p>
        <p><b>topSpeed:</b> ${modelle.topSpeed}</p>
      </div>
    `;
    container.classList.remove("w3-hide");
  } else {
    // Container ist sichtbar → ausblenden
    container.classList.add("w3-hide");
  }
}
window.addEventListener("scroll", function () {
  const topbar = document.getElementById("topbar");
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
