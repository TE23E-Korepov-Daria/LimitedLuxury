// Hämta referenser till knappen och popup-elementet
const myButton = document.getElementById("myButton"); // Hämtar HTML-elementet med id "myButton" (knappen).
const myPopup = document.getElementById("Popup");     // Hämtar HTML-elementet med id "Popup" (popup-fönstret).

// Funktion för att växla popup-fönstrets synlighet
function togglePopup() {
    myPopup.classList.toggle("show"); // Lägger till eller tar bort klassen "show" från popup-elementet.
    // Klassen "show" används i CSSen för att styra popup-fönstrets synlighet.
}

// Lägg till en event-lyssnare för klick på knappen
myButton.addEventListener("click", togglePopup); 
// När användaren klickar på knappen körs funktionen `togglePopup`, vilket visar eller döljer popup-fönstret.

// Stäng popup-fönstret om användaren klickar utanför det
window.addEventListener("click", (event) => {
    if (!myPopup.contains(event.target) && event.target !== myButton) {
        // Kontrollera om det klickade elementet inte är en del av popup-fönstret och inte heller knappen.
        myPopup.classList.remove("show"); // Om villkoret uppfylls, ta bort klassen "show" för att dölja popup-fönstret.
    }
});




let cartCount = 0; // Variabel som håller reda på antalet varor i kundvagnen. Börjar på 0.

// Lägg till en eventlyssnare på alla knappar med klassen 'add-to-cart'
document.querySelectorAll('.add-to-cart').forEach(button => {
    // För varje knapp, lägg till en 'click'-händelse
    button.addEventListener('click', function () {
        cartCount++; // Öka antalet varor i kundvagnen med 1
        document.getElementById('cart-count').textContent = cartCount; // Uppdatera texten i elementet med id 'cart-count' för att visa det nya antalet
    });
});
