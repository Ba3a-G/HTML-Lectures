console.log("Working");

consent = confirm("Do you absolutely want to enter the website? Are you even above 18?");
if (consent) {
    var user = prompt("In that case please enter your name.", "Batman");
    console.log(user);
    document.getElementById("message").innerHTML = `${user} just entered the website!`;
} else {
    document.getElementById("message").innerHTML = `Come back later.`;
}

function alertMessage() {
    alert("This is an alert!");
}