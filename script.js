/***************************************
IMAGE SOURCES:
1. http://www.clipartbest.com/cliparts/dc6/n5a/dc6n5aRc9.png
2. http://img1.123freevectors.com/wp-content/uploads/new/people/440-free-fist-silhouette-illustrator-vector-image.png
3. http://www.clker.com/clipart-peace-sign-1.html
***************************************/


//VARIABLES
var userPick = 0, compPick = 0; //What user and computer shoot
var compScore = 0, playerScore = 0, tieTally = 0; //Score
var playername = username();

//Variables to easily target document elements
var buttonRock = document.getElementById('btn-rock'), buttonPaper = document.getElementById('btn-paper'), buttonScissor = document.getElementById('btn-scissor');
var computerScore = document.getElementById('computer-score'), operator = document.getElementById('operator'), userPickDisplay = document.getElementById('user-pick'), computerPick = document.getElementById('computer-pick'), imgComputer = document.getElementById('img-computer');
var col1 = document.getElementById('col-1'), col2 = document.getElementById('col-2'), col3 = document.getElementById('col-3');

//If textbox is empty
if (playername == ""){
      playername = "Player";
}

//Runs when rock button is clicked
function btnRock() {
      userPick = 1; //1 = rock
}

//Runs when paper button is clicked
function btnPaper() {
      userPick = 2; //2 = paper
}

//Runs when scissor button is clicked
function btnScissor() {
      userPick = 3; //3= scissor
}

//Runs when shoot button is clicked
function shoot() {
      compPick = parseInt(Math.random()*3)+1; //Generates random number

      //1 = Rock, 2 = Paper, 3 = Scissor, 0 = Error message;

      //Based on what user & computer pick, inner html and scores are updated
      switch (userPick) {
            case 1: //User picks rock
                  document.getElementById('img-player').src="player-rock.png";      //Shows image of rock
                  switch(compPick) {
                        case 2: //Computer picks paper
                              compScore++;
                              computerScore.innerHTML=compScore;
                              operator.innerHTML="<";
                              userPickDisplay.innerHTML="  Rock";
                              computerPick.innerHTML="  Paper";
                              imgComputer.src="computer-paper.png";
                              break;
                        case 1: //Computer picks rock
                              tieTally++;
                              document.getElementById('tie-score').innerHTML=tieTally;
                              operator.innerHTML="=";
                              userPickDisplay.innerHTML="  Rock";
                              computerPick.innerHTML="  Rock";
                              imgComputer.src="computer-rock.png";
                              break;
                        case 3: //Computer picks scissor
                              playerScore++;
                              document.getElementById('player-score').innerHTML=playerScore;
                              operator.innerHTML=">";
                              userPickDisplay.innerHTML="  Rock";
                              computerPick.innerHTML="  Scissor";
                              imgComputer.src="computer-scissor.png";
                              break;
                  }
            break; //user picks rock

            case 2: //User picks paper
                  document.getElementById('img-player').src="player-paper.png";     //Shows picture of paper
                  switch(compPick) {
                        case 2: //Computer picks paper
                          tieTally++;
                          document.getElementById('tie-score').innerHTML=tieTally;
                          operator.innerHTML="=";
                          userPickDisplay.innerHTML="  Paper";
                          computerPick.innerHTML="  Paper";
                          imgComputer.src="computer-paper.png";
                          break;
                        case 1: //Computer picks rock
                            playerScore++;
                            document.getElementById('player-score').innerHTML=playerScore;
                            operator.innerHTML=">";
                            userPickDisplay.innerHTML="  Paper";
                            computerPick.innerHTML="  Rock";
                            imgComputer.src="computer-rock.png";
                            break;
                        case 3: //Computer picks scissor
                            compScore++;
                            computerScore.innerHTML=compScore;
                            operator.innerHTML="<";
                            userPickDisplay.innerHTML="  Paper";
                            computerPick.innerHTML="  Scissor";
                            imgComputer.src="computer-scissor.png";
                            break;
                  }
            break; //user picks paper

            case 3: //User picks scissor
                  document.getElementById('img-player').src="player-scissor.png";
                  switch(compPick) {
                        case 2: //Computer picks paper
                            playerScore++;
                            document.getElementById('player-score').innerHTML=playerScore;
                            operator.innerHTML=">";
                            userPickDisplay.innerHTML="  Scissor";
                            computerPick.innerHTML="  Paper";
                            imgComputer.src="computer-paper.png";
                            break;
                        case 1: //Computer picks rock
                            compScore++;
                            computerScore.innerHTML=compScore;
                            operator.innerHTML="<";
                            userPickDisplay.innerHTML="  Scissor";
                            computerPick.innerHTML="  Rock";
                            imgComputer.src="computer-rock.png";
                            break;
                        case 3: //Computer picks scissor
                            tieTally++;
                            document.getElementById('tie-score').innerHTML=tieTally;
                            operator.innerHTML="=";
                            userPickDisplay.innerHTML="  Scissor";
                            computerPick.innerHTML="  Scissor";
                            imgComputer.src="computer-scissor.png";
                            break;
                  }
            break; //if user shoots without picking rock/paper/scissor
            default:
                  alert("You must pick what you want to shoot!\n\nClick 'Rock', 'Paper', or 'Scissors' on the left.\nThen click 'Shoot!'. \n\n\t\t\tGood Luck!");
                  break;
      } //end shoot case

      //Resets what user picked (allows user to get default alert above)
      userPick=0;
      winning(compScore,playerScore); //Shows which user is winning
      winner(); //Shows game winner



}// end shoot function

function winning(compScore,playerscore) {
      //Based on the player's score & computer's score, program determines who is winning
      if (compScore>playerScore)
            document.getElementById('winner').innerHTML=playername+", you are losing by "+(compScore-playerScore)+" point(s)!";
      else if (playerScore>compScore)
            document.getElementById('winner').innerHTML=playername+", you are winning by "+(playerScore-compScore)+" point(s)!";
      else
            document.getElementById('winner').innerHTML="Close game! It's a tie.";
}

function winner() {
  var displayWinner = document.getElementById('display-winner');

      //Clears highlighted column by removing a class
      resetHighlight();

      //Displays who won the current match & changes the background to highlight winner
      switch(operator.innerHTML) {
          case "=":
            col2.className += " fadein";
            displayWinner.value = "Tie."
            break;
          case "&lt;": //less than
            col3.className += " fadein";
            displayWinner.value = "Computer wins!";
            break;
          case "&gt;": //greater than
            col1.className += " fadein";
            displayWinner.value = playername+" wins!";
            break;
      }
}

function username() {

      //Stores player's name when entered. Default name is "Player"
      playername = document.getElementById('playername').value;
      if (playername == "")
            playername = "Player";
      return playername;
}

function reset() {
      var displayWinner = document.getElementById('display-winner');

      //Resets all aspects of game (score, images, winner, highlight)
      compScore=0;
      playerScore=0;
      tieTally=0;
      computerScore.innerHTML=compScore;
      document.getElementById('player-score').innerHTML=playerScore;
      document.getElementById('tie-score').innerHTML=tieTally;
      document.getElementById('winner').innerHTML="Click a button on the bottom left to begin.";
      document.getElementById('operator').innerHTML="";
      userPickDisplay.innerHTML="";
      computerPick.innerHTML="";
      document.getElementById('img-player').src="";
      imgComputer.src="";
      resetHighlight();
      displayWinner.value = "GAME RESTARTED";
}

function resetHighlight() {
      col1.className = col1.className.replace(" fadein", "");
      col2.className = col2.className.replace(" fadein", "");
      col3.className = col3.className.replace(" fadein", "");
}
