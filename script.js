
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (!name || !phone || !date || !guests) {
        alert("Please fill all the fields.");
        return;
    }

    // Replace this demo number with the restaurant's WhatsApp number.
    const restaurantNumber = "+919519583365";

    const message =
        `Hello, I want to book a table.%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Date: ${encodeURIComponent(date)}%0A` +
        `Guests: ${encodeURIComponent(guests)}`;

    const whatsappURL =
        `https://wa.me/${restaurantNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
});
