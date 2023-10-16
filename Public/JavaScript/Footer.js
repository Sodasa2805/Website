function footer(){

        function creativeCommons(){

                var license = document.createElement("IMG");
                license.setAttribute("src", "https://i.creativecommons.org/l/by/4.0/88x31.png");
                license.setAttribute("alt", "Creative Commons license");
                
                document.getElementById("license").appendChild(license);
        
                return license;

        }

        creativeCommons();

        function yearsFooter() {

                const footer = `<p> 2023-${new Date().getFullYear()} MUTTS </p>`;
                document.getElementById("cc").innerHTML = footer;

                return footer;
        }

        yearsFooter();

}

footer();