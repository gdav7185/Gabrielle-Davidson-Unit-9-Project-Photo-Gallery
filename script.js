let desserts = [];
let userInput;

$(".addNew").click(function() {
    userInput = $(".newDessert").val();
    desserts.push(userInput);
    $(".dessertList").append("<img src=" + desserts[0] + ">");
    $(".dessertList").append("<img src=" + desserts[1] + ">");
    $(".dessertList").append("<img src=" + desserts[2] + ">");
$(".numDesserts").text(desserts.length);

});