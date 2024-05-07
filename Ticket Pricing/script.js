function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Prompt the user to enter their age
let age = parseInt(prompt("Enter your age:"));

// Calculate the ticket price based on the entered age
let ticketPrice = calculateTicketPrice(age);

// Display the ticket price
console.log("The price of your movie ticket is: $" + ticketPrice);
