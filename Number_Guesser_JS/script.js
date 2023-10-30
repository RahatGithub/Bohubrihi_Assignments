// UI elements 
let newGameBtn = document.querySelector('#new_game_btn');
let resultSection = document.querySelector('#result_section'); 
let commentSection = document.querySelector('#comment_section'); 

// event listeners
newGameBtn.addEventListener('click', playGame);


let low = 1, high = 10; 

function playGame(){
  correctAns = Math.ceil(Math.random() * 10);
  let moveResult, win = false;
  for(let i=0; i<3; i++){
    moveResult = checkMove(correctAns);
    alert(`your guess is ${moveResult}`);
    if(moveResult == "correct"){
      win = true;
      break;
    }
  } 
  showResult(win, correctAns);
}


function checkMove(correctAns) {
  let number = parseInt(prompt("Enter your guess(1-10)")); 
  if(number!=NaN && number > correctAns){
    return "greater";
  }
  if(number!=NaN && number < correctAns){
    return "smaller";
  }
  if(number!=NaN && number == correctAns){
    return "correct";
  }
}


function showResult(win){
  if(win){
    resultSection.innerHTML = `<span class="text-success">Congrats! You win! Correct Ans: ${correctAns}</span>`;
  }
  else{
    resultSection.innerHTML = `<span class="text-danger">Oops! You lose! Correct Ans: ${correctAns}</span>`;
  }
}