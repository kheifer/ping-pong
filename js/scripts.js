//BUSINESS logic
function pingPongGame(userInput) {
  answer =[];
  for(var i=1; i<=userInput; i++){
    //answer.push(i);
    if (i%15 === 0) {
      answer.push("ping-pong");
    } else if (i%5 === 0) {
      answer.push("pong");
    } else if (i%3 === 0) {
      answer.push("ping");
    } else {
       answer.push(i);
    }
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
