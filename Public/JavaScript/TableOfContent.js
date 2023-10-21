function tableOfContent(goTo) {

    if (goTo != '') {
        window.location = goTo;
    }
}

var selectPage = document.getElementById('select');

selectPage.onchange = function() {
    var value = this.value;
    tableOfContent(value); 
};
