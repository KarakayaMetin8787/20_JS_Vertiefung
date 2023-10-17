function showURL() {
    const currentURL = window.location.href;
    const urlDisplay = document.getElementById("urlDisplay");
    urlDisplay.textContent = "Die aktuelle URL der Seite ist: " + currentURL;
}
