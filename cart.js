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








function displayCart() {
    // Hämta kundvagnens innehåll från localStorage och omvandla det från JSON-format till en array.
    // Om det inte finns något i localStorage, använd en tom array som standard.
    const cartItems = JSON.parse(localStorage.getItem("cart")) || []; 

    // Hämta HTML-elementet där kundvagnens innehåll ska visas.
    const cartContainer = document.getElementById("cartContainer"); 

    // Rensa tidigare innehåll i kundvagnens container för att undvika duplicering.
    cartContainer.innerHTML = ""; 

    // Variabel för att hålla reda på totalpriset för alla varor i kundvagnen.
    let totalPrice = 0;

    // Iterera över varje objekt (vara) i kundvagnens array.
    cartItems.forEach(item => {
        // Skapa ett nytt div-element för att representera en vara i kundvagnen.
        const itemElement = document.createElement("div");

        // Lägg till en CSS-klass för styling av varan.
        itemElement.classList.add("cart-item");

        // Fyll div-elementet med varans namn, kvantitet och pris.
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>${item.quantity} x ${item.price} $</span>
        `;

        // Lägg till varans element i kundvagnens container.
        cartContainer.appendChild(itemElement);

        // Uppdatera totalpriset genom att multiplicera varans pris med dess kvantitet och lägga till det.
        totalPrice += item.price * item.quantity; 
    });

    // Skapa ett nytt div-element för att visa totalpriset.
    const totalElement = document.createElement("div");

    // Lägg till en CSS-klass för styling av totalpriset.
    totalElement.classList.add("cart-total");

    // Fyll div-elementet med text som visar totalpriset.
    totalElement.innerHTML = `<strong>Totalpris:</strong> ${totalPrice} $`;

    // Lägg till totalpris-elementet i kundvagnens container.
    cartContainer.appendChild(totalElement);
}

// Kör funktionen för att visa kundvagnen direkt när sidan laddas.
displayCart();