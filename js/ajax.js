$(document).ready(function() {
    
    // 1. JSON einmalig laden, damit wir es parat haben
    let searchIndex = [];
    $.getJSON("./data/search.json", function(data) {
        searchIndex = data;
    });

    // 2. Event: Wenn der Nutzer tippt
    $('#searchInput').on('keyup', function() {
        
        let wert = $(this).val().toLowerCase();
        let ergebnisBox = $('#searchResultBox');
        
        // Erstmal alles leeren
        ergebnisBox.empty();

        // Wenn das Feld leer ist, Box verstecken und abbrechen
        if (wert.length < 1) {
            ergebnisBox.hide();
            return;
        }

        // 3. Durch das JSON filtern
        let treffer = searchIndex.filter(function(eintrag) {
            // Wir suchen im Titel UND im Text
            return eintrag.titel.toLowerCase().includes(wert) || 
                   eintrag.text.toLowerCase().includes(wert);
        });

        // 4. Ergebnisse anzeigen
        if (treffer.length > 0) {
            treffer.forEach(function(item) {

                let dateiname = item.link.split('#')[0]; 
    
    // Schritt B: Das './' am Anfang entfernen (optional, sieht aber sauberer aus)
    dateiname = dateiname.replace('./', '');
                // Link erstellen
                let link = `<a href="${item.link}" class="search-item">
                                <b>${item.titel}</b><br>
                                <small>Seite: ${dateiname}</small>
                            </a>`;
                ergebnisBox.append(link);
            });
            ergebnisBox.show(); // Box anzeigen
        } else {
            ergebnisBox.append('<div class="search-item">Keine Ergebnisse</div>');
            ergebnisBox.show();
        }
    });

    // 5. Box schließen, wenn man woanders hinklickt
    $(document).click(function(e) {
        if (!$(e.target).closest('.search-container').length) {
            $('#searchResultBox').hide();
        }
    });
});