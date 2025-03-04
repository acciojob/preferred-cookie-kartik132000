// Function to get a cookie by name
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Function to set a cookie with Cypress-friendly attributes
function setCookie(name, value, days = 365) {
    let expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = [`${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`];
}

// Function to apply saved preferences
function applyPreferences() {
    let savedFontSize = getCookie("fontsize");
    let savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
        document.getElementById("fontsize").value = savedFontSize;
    }

    if (savedFontColor) {
        document.documentElement.style.setProperty("--fontcolor", savedFontColor);
        document.getElementById("fontcolor").value = savedFontColor;
    }
}

// Function to save preferences
function savePreferences(event) {
    event.preventDefault(); // Prevent form submission

    let fontSize = document.getElementById("fontsize").value;
    let fontColor = document.getElementById("fontcolor").value;

    // Validate font size range (8-72px)
    fontSize = Math.min(72, Math.max(8, fontSize));

    setCookie("fontsize", fontSize);
    setCookie("fontcolor", fontColor);

    applyPreferences(); // Apply changes immediately
}

// Ensure Cypress finds the correct button
document.getElementById("fontForm").addEventListener("submit", savePreferences);

// Apply preferences on page load
applyPreferences();
