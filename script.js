  // Function to set CSS variables
        function applyPreferences() {
            const fontSize = getCookie("fontsize") || "16px";
            const fontColor = getCookie("fontcolor") || "#000000";

            document.documentElement.style.setProperty("--fontsize", fontSize);
            document.documentElement.style.setProperty("--fontcolor", fontColor);

            // Set input values to match cookies
            document.getElementById("fontsize").value = parseInt(fontSize);
            document.getElementById("fontcolor").value = fontColor;
        }

        // Function to get a cookie by name
        function getCookie(name) {
            const cookies = document.cookie.split("; ");
            for (let cookie of cookies) {
                let [key, value] = cookie.split("=");
                if (key === name) return decodeURIComponent(value);
            }
            return null;
        }

        // Function to set a cookie
        function setCookie(name, value, days = 365) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
        }

        document.getElementById("customizationForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const fontSize = document.getElementById("fontsize").value + "px";
            const fontColor = document.getElementById("fontcolor").value;

            setCookie("fontsize", fontSize);
            setCookie("fontcolor", fontColor);

            applyPreferences();
        });

        // Apply preferences when the page loads
        document.addEventListener("DOMContentLoaded", applyPreferences);