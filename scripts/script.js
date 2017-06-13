$(document).ready(function() {
    // Navigation bar movement
    $('.myMenu ul li').hover(function() {
	   $(this).children('ul').stop(true, false, true).slideToggle(300);
    });
});

function calculate(){
    var pricePerRoom1 = calculatePricePerRoom("select1a");
    var pricePerRoom2 = calculatePricePerRoom("select2a");
    var pricePerRoom3 = calculatePricePerRoom("select3a");
    var numOfRooms1 = calculateNumOfRooms("select1b");
    var numOfRooms2 = calculateNumOfRooms("select2b");
    var numOfRooms3 = calculateNumOfRooms("select3b");
    function calculatePricePerRoom(id){
        var e = document.getElementById(id);
        var strUser = e.options[e.selectedIndex].text;
        var pricePerRoom = 0;
        if (strUser === "Classical suite for single" ||strUser === "Chalet for single"){
             pricePerRoom = 1000;
        }
        else if (strUser === "Classical suite for double"||strUser === "Chalet for double"){
             pricePerRoom = 2000;
        }
        else if (strUser === "Classical suite for quad"||strUser === "Chalet for quad"){
             pricePerRoom = 4000;
        }
        else if (strUser === "Presidential suite"){
             pricePerRoom = 5000;
        }
        return pricePerRoom;
    }
    function calculateNumOfRooms(id){
        var e = document.getElementById(id);
        var strUser = e.options[e.selectedIndex].text;
        var numOfRooms = 0;
        if (strUser === "1"){
             numOfRooms = 1;
        }
        else if (strUser === "2"){
             numOfRooms = 2;
        }
        else if (strUser === "3"){
             numOfRooms = 3;
        }
        return numOfRooms;
    }
    var sub1 = pricePerRoom1*numOfRooms1;
    var sub2 = pricePerRoom2*numOfRooms2;
    var sub3 = pricePerRoom3*numOfRooms3;
    var subtotal1 = "Subtotal: " + pricePerRoom1 + " * " + numOfRooms1 + " = " + sub1;
    var total = subtotal1;
    if (numOfRooms2 != 0){
        var subtotal2 = "Subtotal: " + pricePerRoom2 + " * " + numOfRooms2 + " = " + sub2;
        total = total + "<br/>" + subtotal2;
    }
    if (numOfRooms3 != 0){
        var subtotal3 = "Subtotal: " + pricePerRoom3 + " * " + numOfRooms3 + " = " + sub3;
        total = total + "<br/>" + subtotal3;
    }
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var cardHolder = firstName + " " + lastName;
    var date = Date();
    total = total + "<br/>" + "Total: " + (sub1+sub2+sub3) + "<br/>" + "<br/>" + "Card holder, " + cardHolder + ", has paid " + (sub1+sub2+sub3) + "NT on " + date + ". Thank you for your payment. Hope to see you soon!";
    document.getElementById("receipt").style.border = "1px dotted black";
    document.getElementById("receipt").innerHTML = total;
}