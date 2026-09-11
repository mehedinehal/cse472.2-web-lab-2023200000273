// Number of seats currently available for the workshop
let availableSeats = 12;

// Interaction 1: Update the registration status text on the page
function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

// Interaction 2: Check seat availability using a simple if...else condition
function checkSeats() {
    let message = document.getElementById("seatMessage");

    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}

// Interaction 3: Read the student's name and show a personalised greeting
function showGreeting() {
    let name = document.getElementById("fullname").value;
    let output = document.getElementById("greetingMessage");

    if (name === "") {
        output.textContent = "Please type your name above first.";
    } else {
        output.textContent = "Welcome, " + name + "! Thank you for registering.";
    }
}

// Independent feature: show the main event venue
function showVenue() {
    let message = document.getElementById("venueMessage");
    message.textContent = "The event will be held at the Main Auditorium, Southeast University.";
}

// ===== Lab 04: Form validation, JSON and localStorage =====

// Read form values, validate them, build an object, convert to JSON and save it
function submitRegistration() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    // Simple validation: check that required fields are not empty
    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    // Group the related values in one JavaScript object
    let registration = {
        name: name,
        email: email,
        workshop: workshop
    };

    // Convert the object to JSON text
    let jsonData = JSON.stringify(registration);

    // Save the JSON text in localStorage under the key "registration"
    localStorage.setItem("registration", jsonData);

    // Show the JSON text on the page
    document.getElementById("jsonOutput").textContent = jsonData;
    message.textContent = "Registration saved successfully.";
}

// Read the saved JSON text from localStorage and show it as a sentence
function showSavedRegistration() {
    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);

    output.textContent =
        registration.name + " registered for " + registration.workshop + ".";
}

// Remove the saved practice data from localStorage
function clearRegistration() {
    localStorage.removeItem("registration");
    document.getElementById("savedMessage").textContent =
        "Saved registration cleared.";
    document.getElementById("jsonOutput").textContent = "";
}
