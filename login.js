let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username === "abc@xyz.com" && password === "pass") {
        alert("You have logged in successfully!!");
        window.location = "successful.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--;// Decrementing by one.
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        // Disabling fields after 3 attempts.
        if (attempt === 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("sign-in").disabled = true;
            alert("You have exhausted all your valid attempts")
            return false;
        } else {
            alert("You have left " + attempt + " attempt, After that fields would be blocked");
        }
    }
}
