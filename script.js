var img = new Image();
img.src = "pic/wallpaper.jpg"

img.onload = function() {
  document.getElementById("myscreen").style.backgroundImage = "url('pic/wallpaper.jpg')";
}

let left = document.getElementById("left");
let webImgL = document.querySelector(".webImgL");
left.addEventListener("mouseover", (event) => {
  webImgL.classList.add("hover");
})

left.addEventListener("mouseleave", (event) => {
  webImgL.classList.remove("hover");
})

let right = document.getElementById("right");
let webImgR = document.querySelector(".webImgR");
right.addEventListener("mouseover", (event) => {
  webImgR.classList.add("hover");
})

right.addEventListener("mouseleave", (event) => {
  webImgR.classList.remove("hover");
})

//---------------------------------------------------
// action based on toolbar's icon
let youtube = document.getElementById("youtube");
let chrome1 = document.getElementById("chrome");
let contact = document.getElementById("contact");
let document1 = document.getElementById("document");

let youtubeBoard = document.getElementById("youtubeBoard");
let chromeBoard = document.getElementById("chromeBoard");
let contactBoard = document.getElementById("contactBoard");
let documentBoard = document.getElementById("documentBoard");

youtube.addEventListener("click", (event) => {
  youtubeBoard.style.display = "flex";
  chromeBoard.style.display = "none";
  contactBoard.style.display = "none";
  documentBoard.style.display = "none";

})

chrome1.addEventListener("click", (event) => {
  youtubeBoard.style.display = "none";
  chromeBoard.style.display = "flex";
  contactBoard.style.display = "none";
  documentBoard.style.display = "none";
})

contact.addEventListener("click", (event) => {
  youtubeBoard.style.display = "none";
  chromeBoard.style.display = "none";
  contactBoard.style.display = "flex";
  documentBoard.style.display = "none";
})

document1.addEventListener("click", (event) => {
  youtubeBoard.style.display = "none";
  chromeBoard.style.display = "none";
  contactBoard.style.display = "none";
  documentBoard.style.display = "flex";
})

//---------------------------------------------------
// youtube's title animation
let string = document.querySelectorAll("#like > div");

youtubeBoard.addEventListener("mouseleave", (event) => {
  for (let i=0; i < string.length; i++) {
    string[i].classList.remove("skew");
  }
})
youtubeBoard.addEventListener("mouseover", (event) => {
  for (let i=0; i < string.length; i++) {
    string[i].classList.add("skew");
  }
})

// video left and right animation
var ytbL = document.getElementById('ytbL');
var ytbR = document.getElementById('ytbR');

var rightInfo = document.getElementById("rightInfo");
var leftInfo = document.getElementById("leftInfo");

var rightbtn = document.getElementById("rightbtn");
var leftbtn = document.getElementById("leftbtn");

var leftTF = true;
var rightTF = true;
leftbtn.addEventListener("click", () => {  
  if(leftTF) {
    ytbR.classList.add("disappear");
    setTimeout(() => {
      rightInfo.classList.add("appear");
      rightInfo.style.display = "block";
    }, 1000);
    rightbtn.disabled = true;
  } else {
    rightInfo.classList.add("disappear");
    setTimeout(() => {
      ytbR.classList.remove("disappear");
      ytbR.classList.add("appear");
      rightInfo.classList.remove("appear");
      rightInfo.classList.remove("disappear");
      rightInfo.style.display = "none";
    }, 1000);
    rightbtn.disabled = false;
  }
  leftTF = !leftTF;
})

rightbtn.addEventListener("click", () => {
  if(rightTF) {
    ytbL.classList.add("disappear");
    setTimeout(() => {
      leftInfo.classList.add("appear");
      leftInfo.style.display = "block";
    }, 1000);
    leftbtn.disabled = true;
  } else {
    leftInfo.classList.add("disappear");
    setTimeout(() => {
      ytbL.classList.remove("disappear");
      ytbL.classList.add("appear");
      leftInfo.classList.remove("appear");
      leftInfo.classList.remove("disappear");
      leftInfo.style.display = "none";
    }, 1000);
    leftbtn.disabled = false;
  }
  rightTF = !rightTF;
})


//---------------------------------------------------
// initialize board
const image = ["url('pic/contact.webp')",
               "url('pic/contact.webp')",
               "url('pic/linkedinIcon.png')",
               "url('pic/linkedinIcon.png')",
               "url('pic/replitIcon.png')",
               "url('pic/replitIcon.png')",
               "url('pic/cssbattle.png')",
               "url('pic/cssbattle.png')",
               "url('pic/youtube.png')",
               "url('pic/youtube.png')",
               "url('pic/codepen.webp')",
               "url('pic/codepen.webp')",
               "url('pic/github.png')",
               "url('pic/github.png')",
               "url('pic/resume.jpg')",
               "url('pic/resume.jpg')"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomNoRepeat() {
  let mystack = [];
  let randomN = getRandomInt(16);
  while(mystack.length < 16) {
    if(!mystack.includes(randomN)) {
      mystack.push(randomN);
    }
    randomN = getRandomInt(16);
  }
  return mystack;
}

// handle play, start, and reset game
let start;
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let time = document.getElementById("time");
let myboard = document.querySelector(".one");
let topBoard = document.querySelector(".two");
play.addEventListener("click", () => {
  play.classList.add("hideMe");
  myboard.classList.remove("hideMe");
  topBoard.classList.remove("hideMe");
  myboard.classList.add("unhideMe");
  topBoard.classList.add("unhideMe");
  reset.innerHTML = "STOP";
  var seconds = 0;
  start = window.setInterval(() => {
    seconds = seconds + 1;
    document.getElementById("time").innerHTML = seconds + " seconds!";
  }, 1000);
})

reset.addEventListener("click", () => {
  console.log(reset.innerHTML === "STOP");
  console.log(reset.innerHTML);
  if(reset.innerHTML === "STOP") {
    stopGame();
    stopOrReset = false;
  } else {
    resetGame();
    stopOrReset = true;
    time.innerHTML = "TIME";
    play.classList.remove("hideMe");
    myboard.classList.remove("unhideMe");
    topBoard.classList.remove("unhideMe");
    myboard.classList.add("hideMe");
    topBoard.classList.add("hideMe");
    turnOffButton();
  }
})

function stopGame() {
  clearInterval(start);
  reset.innerHTML = "RESET";  
}

function resetGame() {
  let mystack = randomNoRepeat();
  for (let i = 0; i < myboard.children.length; i++) {
    myboard.children[i].style.backgroundImage = image[mystack[i]];
    myboard.children[i].style.opacity = "1";
  }
  for(let i = 0; i < topBoard.children.length; i++) {
    topBoard.children[i].style.opacity = "1";    
  }
}
resetGame();

// check game
let count = 0;
function turnSquareCheck(topBoard, bottomBoard) {
  let prevImg = "";
  let prevLoc = -1;
  let currentLoc = -1;
  let clicked = false;
  let result = false;
  for(let i = 0; i < topBoard.children.length; i++) {
    topBoard.children[i].addEventListener("click", () => {
      // opned: play game
      if(topBoard.children[i].style.opacity == "1") {
        console.log("not opened");
        // open board
        topBoard.children[i].style.opacity = "0";
        console.log("opened");
        // first, same, not same
        if(clicked == false) {
          // save to be prev
          console.log("checked is: " + clicked);
          prevImg = bottomBoard.children[i].style.backgroundImage;
          prevLoc = i;
          clicked = true;
        } else {
          console.log("why" + topBoard.children[i].style.opacity);
          // same, not same
          if(bottomBoard.children[i].style.backgroundImage == prevImg) {
            // same
            console.log("same here");
            count++;
            if(count == 8) {
              stopGame();
            }
            turnOnButton(prevImg);
            bottomBoard.children[i].style.opacity = "0.5";
            bottomBoard.children[prevLoc].style.opacity = "0.5";         
            prevImg = "";
            prevLoc = -1;
            clicked = false;            
          } else {
            console.log("not same here");
            clicked = false;
            setTimeout(() => {
              topBoard.children[prevLoc].style.opacity = "1";
              topBoard.children[i].style.opacity = "1";
            }, "200")
          }
        }
      }
    })
  }
}

turnSquareCheck(topBoard, myboard);

// turn on or off the game's button
let resumeB = document.querySelector(".resumeB");
let replitB = document.querySelector(".replitB");
let youtubeB = document.querySelector(".youtubeB");
let linkedinB = document.querySelector(".linkedinB");
let cssbattleB = document.querySelector(".cssbattleB");
let githubB = document.querySelector(".githubB");
let contactB = document.querySelector(".contactB");
let codepenB = document.querySelector(".codepenB");


resumeB.disabled = true;
replitB.disabled = true;
youtubeB.disabled = true;
linkedinB.disabled = true;
cssbattleB.disabled = true;
githubB.disabled = true;
contactB.disabled = true;
codepenB.disabled = true;

function turnOnButton(img) {
  //console.log(img);
  let startI = img.indexOf('/') + 1;
  let endI = img.indexOf('.');
  let trim = img.substring(startI, endI);
  //console.log(trim);
  //console.log( trim === "resume" );
  if(trim === "resume") {
    resumeB.disabled = false;
    resumeB.style.display = "block";
  }
  if(trim === "replitIcon") {
    replitB.disabled = false;
    replitB.style.display = "block";
  }
  if(trim === "youtube") {
    youtubeB.disabled = false;
    youtubeB.style.display = "block";
  }
  if(trim === "linkedinIcon") {
    linkedinB.disabled = false;
    linkedinB.style.display = "block";
  }
  if(trim === "cssbattle") {
    cssbattleB.disabled = false;
    cssbattleB.style.display = "block";
  }
  if(trim === "github") {
    githubB.disabled = false;
    githubB.style.display = "block";
  }
  if(trim === "contact") {
    contactB.disabled = false;
    contactB.style.display = "block";
  }
  if(trim === "codepen") {
    codepenB.disabled = false;
    codepenB.style.display = "block";
  }
}


function turnOffButton() {
  resumeB.style.display = "none";
  replitB.style.display = "none";
  youtubeB.style.display = "none";
  linkedinB.style.display = "none";
  cssbattleB.style.display = "none";
  githubB.style.display = "none";
  contactB.style.display = "none";
  codepenB.style.display = "none";
}






function addVideos() {
  console.log('page is fully loaded');
  let video1 = document.querySelector("#ytbL > source");
let video2 = document.querySelector("#ytbR > source");
  video1.src = "video/cssbattle.mp4";
  video2.src = "video/csssolutions.mp4";
};