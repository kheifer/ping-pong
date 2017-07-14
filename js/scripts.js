//BUSINESS logic
function pingPongGame(userInput) {
  answer =[];
  for(var i=1; i<=userInput; i++){
    answer.push(i);
  }

  return answer;
};







//UI LOGIC
$(document).ready(function () {
  $("#ping-pong").submit(function (event) {
    event.preventDefault();
    var userInput = $("#number").val();
    var pingNum = pingPongGame(userInput);
    alert(pingNum);

  });
});
