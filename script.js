let getid = document.querySelectorAll(".chosice");
let annoncmentBord = document.querySelector("#id");
let scoreBoard = document.querySelector(".youscore");
let scoreboard = document.querySelector(".compscore");
let scoreBoard1 = document.querySelector("#you")
let scoreboard1 = document.querySelector("#comp")

userscore = 1;
compscore = 1;


// this code is for user choice
getid.forEach((val)=>{
    val.addEventListener("click",()=>{    
        let id = val.getAttribute("id");
        userchoose = id
        console.log("user choose",id);
        
    // this coe is for computer choice
        let compchoices = ["stone", "paper", "scissor"];
        let CompRandomNumber =Math.floor(Math.random()*3);
        let compchoose = compchoices[CompRandomNumber];
        console.log("computer choose",compchoose);

    if(userchoose===compchoose){
        annoncmentBord.innerText = `Match is a draw! Computer chose: ${compchoose} user chose: ${userchoose}`;
        // console.log("match is draw")
    }
    
    else if((userchoose==="paper" &&compchoose ==="scissor")||
        (userchoose === "scissor" && compchoose ==="stone")||
        (userchoose === "stone" && compchoose ==="paper")){
        annoncmentBord.innerText = "you lost "
        computer = compscore++
        scoreboard1.innerText = computer
    }
    
    else{
    annoncmentBord.innerText = `yah! YOU WIN Computer chose: ${compchoose} user chose: ${userchoose}`
    // increasing the point if userwin
    scoreBoard1.innerText =userscore++


    };    
});
    
});

