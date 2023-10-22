var pageToGoTo = "";

function tableOfContent(goTo) {

    if (goTo != '') {
        window.location = goTo;

        pageToGoTo = goTo;

        sessionStorage.setItem("pageGoneTo", pageToGoTo);
    }
}

var selectPage = document.getElementById('select');

selectPage.addEventListener("change", function () {
    var value = selectPage.value;
    tableOfContent(value);
});

var pageGoneTo = sessionStorage.getItem("pageGoneTo");

function reorderOptions() {

    var optGroup1 = document.getElementById('moveAround');

    var selectedValue = pageGoneTo;

    var options = selectPage.options;

    for (let i = options.length - 1; i >= 0; i--) {
        if (options[i].value === selectedValue) {
            optGroup1.insertBefore(options[i], options[0]);
            break;
        }
    }

    selectPage.selectedIndex = 0;
}

reorderOptions();

