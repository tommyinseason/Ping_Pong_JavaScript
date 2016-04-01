// Business Logic Section //
      function pingPong (num) {
        for ( var i = 1; i <= num; i++){
          $(".output").append("<li>" + results(i) + "</li>");
  }
}
      function results(integer) {
        var show = "";
          if (integer % 3 === 0) {
          show = show.concat("ping");
        }
          if (integer % 5 === 0) {
          show = show.concat("pong");
        }
        if (integer % 23 === 0) {
          show = show.concat("king");
        }
        if (integer % 32 === 0) {
          show = show.concat("kong")
        }
          if (!show) {
          show = integer.toString();
        }
          return show;
}

// User Interface Logic //
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
      event.preventDefault();
      $(".output").text("");
      var integer = parseInt($("#integer").val());
      pingPong(integer);
    });
  });
