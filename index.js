let playButton = document.getElementById("play")
let msg = document.getElementById("msg")
playButton.onclick =()=>{
    let buttons = document.querySelectorAll(".button")
    buttons.forEach(ele => ele.style ="display: inline")
    msg.innerText = "COMP vs USER!"
    playButton.style = "display:none"
}
let actionButton = document.querySelectorAll('.button')
let userMove
let compMove 
let userCount = 0
let compCount = 0

actionButton.forEach(i => i.onclick=()=>{
    userMove = i.value
    compMove = Math.floor(Math.random()*3)
    updatePicMove(userMove,compMove)
    action(userMove,compMove)
})
/*Storing img in var so that can manipulated later => for changing imgs*/ 
let compMoveImg = document.querySelector("#paperimg")
let userMoveImg = document.querySelector("#rockimg")

updatePicMove=(userMove,compMove)=>{
   //here i made an array through which iam updating images
   let images = ["rock.png", "paper.png","scissor.png"]
   compMoveImg.src = images[compMove]
   userMoveImg.src = images[userMove]
}

updateScore = (userCount, compCount) =>{
    userScore.innerHTML = userCount
    compScore.innerHTML = compCount
    console.log(`usercount${userCount} && compCount ${compCount}`)
    checkWinner(userCount, compCount)
}

let victory = document.getElementById("victory")
checkWinner=(userCount, compCount)=>{
   
  if(userCount == 3){
     victory.innerText = "you WON!"
     DisplayReplayButton()
    // let buttons = document.querySelectorAll(".button")
    // buttons.forEach(ele => ele.style ="display: none")
    // document.getElementById("replay").style ="display: inline"
  }
  else if(compCount == 3){
     victory.innerText = "you LOST!"
     DisplayReplayButton()
   
      
  }else if(userCount == compCount == 3){
     victory.innerText = "DRAW!"  
     DisplayReplayButton()
   
  }
}




function action(userMove, compMove){

let userScore = document.getElementById("userScore")
let compScore = document.getElementById("compScore")
console.log(`userMOve ${userMove} && compMove${compMove}`)

   if(userMove > compMove && userMove == ++compMove){  
        userCount = ++userCount
        updateScore(userCount,compCount)

    }else if(userMove < compMove && ++userMove == compMove){
        compCount = ++compCount
        updateScore(userCount,compCount)

    }else if(userMove == compMove){
        updateScore(userCount,compCount)

    }else{
        if(userMove < compMove){
            userCount =  ++userCount
            updateScore(userCount,compCount)

        }else if(userMove > compMove){
            compCount = ++compCount
            updateScore(userCount,compCount)

           }
    }
}

DisplayReplayButton=()=>{
    //hiding 3 choice buttons with REPLAY button
    let buttons = document.querySelectorAll(".button")
    buttons.forEach(ele => ele.style = "display : none")
    //replay-button-div -> add replay button
    msg.innerText ='PRESS Replay to PLay again'
    let replayContainer = document.getElementById("replayContainer")
    replayContainer.innerHTML = "<button type='button' id = 'replay'>replay!</button>"
    
   //when replay is hit -> clear score -> display choice buttons
    document.getElementById("replay").onclick=()=>{
    compCount = 0, userCount = 0
    updateScore(compCount,userCount)
    document.getElementById("replay").style="display:none"//hiding replay
    victory.innerText = ''
    msg.innerText ='COMP vs USER!'
    buttons.forEach(ele => ele.style = "display : inline") //display moves buttons(choice)
  
  }
}

