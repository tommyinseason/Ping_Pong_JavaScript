// Business Logic Section //
var pingPong = function(num) {

var resultsArray = [];

  for ( var i = 1; i <= num; i++){
    if ((i % 3 === 0) && (i % 5 === 0)) {
      resultsArray.push("pingPong");
    } else if (i % 23 === 0) {
        resultsArray.push("king");
    } else if (i % 3 === 0) {
      resultsArray.push("ping");
    } else if (i % 5 === 0) {
      resultsArray.push("pong");
    } else if (i % 32 === 0) {
      resultsArray.push("kong");
    } else {
      resultsArray.push(i);
    }
  }

  return resultsArray;
}

// User Interface Logic //
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
      event.preventDefault();
      $(".output").text("");
      var integer = parseInt($("#integer").val());

        var newArray = pingPong(integer);


      newArray.forEach(function(number) {
        $(".output").append("<li>" + number + "</li>");
      });

  });
});
