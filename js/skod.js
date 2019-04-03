$(document).ready(function(){

    var x = 0;

    setInterval(function(){
        var x = Math.floor((Math.random() * 5) + 0);

        if (x < 2.5) {
            document.getElementById("eks").innerHTML = x + ' <i class="fas fa-times-circle" style="color:red;"></i>';
            document.getElementById("status").innerHTML = 'IKKE OK';
            document.getElementById("statusBakgrunn").style.backgroundColor = "red";
        } else {
            document.getElementById("eks").innerHTML = x + ' <i class="fas fa-check-circle" style="color:green;"></i>';
            document.getElementById("status").innerHTML = 'OK';
            document.getElementById("statusBakgrunn").style.backgroundColor = "green";
        }


    }, 1000);

});