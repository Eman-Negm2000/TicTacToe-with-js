let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],  
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerHTML = "";
    element.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//Win Logic
const winChecker = () => {
  //Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerHTML,
      btnRef[i[1]].innerHTML,
      btnRef[i[2]].innerHTML,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      //Display X
      element.innerHTML = "X";
      xTurn = false; 
      element.disabled = true;
    } else {
      //Display O
      element.innerHTML = "O";
      xTurn = true;
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winChecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;

























// // for(let i=1; i<=5; i++){
// //     console.log(i);
// // }

// // var i=1;
// // while(i<=5){
   
// //     console.log("hello world");
// //     i++
// // }
// // let j=1;
// // do{
   
// //     console.log("hello world");
// //      j++;
// // }while(j<=5);

// // let x=5;
// // function test(t){
// //     var h=6;
// //     console.log("hello from function");
// //     return t+4;
// // }
// // let v=test(7);

// // let student={
// //     fname:"hassan",
// //     laname:"omar",
// //     gba:3.9,
// //     fullname:function(){
// //         return this.fname+" "+this.laname;
// //     }

// // }
// // console.log(student.fullname());

// // function test1(num){
// //     return num+2;
// // }

// // console.log(test1(3));//5
// // let test2=num=> num+2;



// // console.log(test2(4));//6

// // function test5(){
// //     return this;
// // }
// // console.log(test5());




