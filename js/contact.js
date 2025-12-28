//deklaration
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];
  const ergebnisAnzeige = document.getElementById("AusgabeGesamt");

  
  const alleIDs = [
    'fname', 'lname', 'name', 'alter', '911', 'Panamera', 'Cayenne',
    'beginner', 'fortge', 'pro', 'eigeneMeinung', 'attention', 'keins'
  ];

  
    
    
    
    
    
    // Klick auf Button > Modal öffnen > Daten sammeln
  btn.addEventListener('click', function (event) {
    modal.style.display = "block"; //Modal erscheint

    const text = collectAndFormatData(alleIDs); //Daten sammeln
    ergebnisAnzeige.innerHTML = "<strong><p>Erfasste Daten:</p></strong><br>" + " " + text; //Ausgeben
    
  });

  //Modal schließen wenn ,man aufs Kreuz klickt
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Modal schließen wenn man irgendwo auf den Bildschirm klickt
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});


function collectAndFormatData(alleIDs) {
  const alleEingabeElemente = alleIDs.map(id => document.getElementById(id));
  const collectedData = {};

  // id aus der HTML umbenennen
  const getLabel = (id) => {
    const labels = {
      'fname': 'Vorname',
      'lname': 'Nachname',
      'email': 'E-Mail',
      'alter': 'Alter',
      '911': 'Welches Modell suchst du?',
      'Panamera': 'Welche Modelle suchst du?',
      'Cayenne': 'Welche Modelle suchst du?',
    'keins': 'Welche Modelle suchst du?',
      'beginner': 'Level',
      'fortge': 'Level',
      'pro': 'Level',
      'eigeneMeinung': 'Ihre Meinung',
      'attention': 'Wie du diese Seite gefunden hast' // Dies ist vermutlich die Select-Box
    };
    return labels[id] || id;
  };

  // Eingabewerte sammeln
  alleEingabeElemente.forEach((element, index) => {
    const id = alleIDs[index];
    const label = getLabel(id);

    if (!element) return;

    // Checkboxen und radiobuttons auslesen
    if (element.type === 'checkbox' || element.type === 'radio') {
      if (element.checked) {
        if (!collectedData[label]) collectedData[label] = [];
        collectedData[label].push(element.value || element.id);
      }
    }
    // Textfeld und Selectbox auslesen
    else if (element.value && element.value.trim() !== '') {
        
      if (element.tagName === 'SELECT') {
        
        if (element.value.trim() !== '') {
          collectedData[label] = element.options[element.selectedIndex].text;
        } else {
          
        }
      } else {
        collectedData[label] = element.value;
      }
    }
  });

  //Nur Ausgabetext anzeigen lassen wenn mehr als 1 Ffeld ausgefüllt wurde
  if (Object.keys(collectedData).length === 0) {
    
    return "<p>Du hast nichts angegeben</p>";
  }


  //Ausgabe der Ergebnisse
  let resultText = '';
  for (const key in collectedData) {
    if (Array.isArray(collectedData[key])) {
      resultText += `•${key}:${collectedData[key].join(',')}<br>`;
    } else {
      resultText += `•${key}:${collectedData[key]}<br>`;
    }
  }

  return resultText;
}