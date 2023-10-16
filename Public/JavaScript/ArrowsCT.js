function arrows(){

    function leftArrow(){
        var leftArrow = `&#129092;`;
         document.getElementById("left-arrow-ct").innerHTML = leftArrow;
   
        return leftArrow;
    }

    leftArrow();

    function rightArrow(){
        var rightArrow = `&#129094;`;
        document.getElementById("right-arrow-ct").innerHTML = rightArrow;

        return rightArrow;
    }

    rightArrow();
}

arrows();