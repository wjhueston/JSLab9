$(document).ready(function () {
    var i
    var numString = ""
    for(i = 1; i< 10; i++){

        var o = 1
        while(o <= i){
            numString = numString + o
            o++
        }
        numString = numString + "\n"

    }
    $("#loops").text(numString)
    $("img").show();
}
)