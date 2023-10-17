function showURL() {
    const currentURL = window.location.href;
    const urlDisplay = document.body.querySelector(".urlDisplay");
    urlDisplay.textContent = "Die aktuelle URL der Seite ist: " + currentURL;
}
