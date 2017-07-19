// BUSINESS logic
function pingPongGame (userInput) {
  var answer = [];
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      answer.push('<li class="pipo">pingpong</li>');
    } else if (i % 5 === 0) {
      answer.push('<li class="po">pong</li>');
    } else if (i % 3 === 0) {
      answer.push('<li class="pi">ping</li>');
    } else {
      answer.push('<li>' + i + '</li>');
    }
  };
  return answer;
};

// UI LOGIC
$(document).ready(function () {
  $("#ping-pong").submit(function (event) {
    event.preventDefault();
    var userInput = $("#number").val();
    var pingNum = pingPongGame(userInput);
    $(".output").show();
    $("#results").html(pingNum);
  });
  $("#reverse").click(function(){
    var userInput = $("#number").val();
    var pingNum = pingPongGame(userInput);
    $(".output").show();
    $("#results").html(pingNum.reverse());
  });
});
