// Business Logic Section //
        var pingPong = function(num) {

        var resultsArray = [];

        for ( var i = 1; i <= num; i++){
          if (integer % 3 === 0) {
          resultsArray.push("ping");
        }
          if (integer % 5 === 0) {
          resultsArray.push("pong");
        }
        if (integer % 23 === 0) {

          resultsArray.push("king");
        }
        if (integer % 32 === 0) {
          resultsArray.push("kong")
        }
          if (!integer) {
          resultsArray.push(i);
        }
          return resultsArray;
          console.log();
    }
}

// User Interface Logic //
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
      event.preventDefault();
      $(".output").text("");
      var integer = parseInt($("#integer").val());

        var newArray = new pingPong();


        forEach(function(newArray) {
      $(".output").append("<li>" + newArray(i) + "</li>");
  });

  });
});
