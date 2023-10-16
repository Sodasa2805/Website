function menu(){

    function showMenu() {
        var show = document.getElementById("hidden-menu");
        if (show.className.indexOf("show") == -1) {
             show.className += " show";
        } else { 
            show.className = show.className.replace(" show", "");
        }

        return show;

    }
    
    document.getElementById("show-menu").onclick = function() {showMenu()};
}

menu();