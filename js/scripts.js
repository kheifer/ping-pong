// BUSINESS logic
function pingPongGame (userInput) {
  var answer = [];
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      answer.push('<li>pingpong</li>');
    } else if (i % 5 === 0) {
      answer.push('<li>pong</li>');
    } else if (i % 3 === 0) {
      answer.push('<li>ping</li>');
    } else {
      answer.push('<li>' + i + '</li>');
    }
  };
  return answer;
};
function reverse() {
  var userInput = $("#number").val();
  var pingNum = pingPongGame(userInput);
  $(".output").show();
  $("#results").html(pingNum.reverse());

}
// UI LOGIC
$(document).ready(function () {
  $("#ping-pong").submit(function (event) {
    event.preventDefault();
    var userInput = $("#number").val();
    var pingNum = pingPongGame(userInput);
    $(".output").show();
    $("#results").html(pingNum);
  });
});
