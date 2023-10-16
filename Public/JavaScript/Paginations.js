function paginations(){

    function leftArrow(){
        var leftArrow = `&#10094;`;
         document.getElementById("left-arrow").innerHTML = leftArrow;
   
        return leftArrow;
    }

    leftArrow();

    function rightArrow(){
        var rightArrow = `&#10095;`;
        document.getElementById("right-arrow").innerHTML = rightArrow;

        return rightArrow;
    }

    rightArrow();
}

paginations();

