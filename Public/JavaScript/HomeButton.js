function homeButton() {
    var homeButton = document.createElement("IMG");
    homeButton.setAttribute("src", "/Images/Home.png");
    homeButton.setAttribute("width", "200");
    homeButton.setAttribute("height", "100");
    homeButton.setAttribute("alt", "Home");
    
    document.getElementById("homepage-button").appendChild(homeButton);

    return homeButton;

}

homeButton();