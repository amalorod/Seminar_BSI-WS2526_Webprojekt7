//Öffnet das Search-Element auf jeder Unterseite
function openSearch() {
    const search = document.getElementById('modalSFrame');
    if (!search) return; 
    
   search.classList.toggle('open');
}


//Schließt das Search-Element und die Sidebar auf jeder Unterseite
function closeAllModals() {
  
  document.getElementById("mySidebar").style.display = "none";


  const searchModal = document.getElementById("modalSFrame");
  
  if (searchModal) {
    searchModal.classList.remove('open');

  }
  }

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}



// SCROLL FUNKTION (Navbar Farbe ändern)
window.addEventListener("scroll", function () {
  const topbar = document.getElementById("topbar");
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});



// gehört zu Kontaktseite 
//Schließt modal bei klick außerhalb
window.onclick = function (event) {
    
   
    const contact = document.getElementById('myModal');
    if (contact && event.target == contact) {
        contact.style.display = "none";
    }
};



function toggleDarkMode() {
document.documentElement.classList.toggle("dark-mode");

}


function increaseFontSize() {


// Toggelt die Klasse "large-font" auf dem html-Element
  document.documentElement.classList.toggle("large-font");


}