let usercnt=0;
let compcnt=0;
let user_cnt=document.querySelector("#userScore");
let comp_cnt=document.querySelector("#compScore");
let msg=document.querySelector("#msg");
const comp=()=>{
    arr=["rock","paper","scissor"];
    idx=Math.floor(Math.random()*3);
    return arr[idx];
}
const draw=()=>{
    document.querySelector("#msg").style.backgroundColor="Blue";
    msg.innerText="Draw! Play Again";
}
const answer=(userWin)=>{
    if(userWin){
        usercnt++;
        user_cnt.innerText=usercnt;
        msg.innerText="You Win!Go Ahead";
        document.querySelector("#msg").style.backgroundColor="green";
    }
    else{
        compcnt++;
        comp_cnt.innerText=compcnt;
        msg.innerText="You Lose!Try Again";
        document.querySelector("#msg").style.backgroundColor="Red";
    }
}
const playGame=(userchoice)=>{
    const compchoice=comp();
    if(userchoice===compchoice){
        draw();
    }
    else{
        userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="scissor" ? true : false;
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="rock" ? true : false;
        }
        else{
            userWin=compchoice==="paper"? true : false;
        }
        answer(userWin);
    }
}
let choices=document.querySelectorAll(".image");
choices.forEach((image)=>{
    image.addEventListener("click",()=>{
     const userchoice = image.getAttribute("id");
     playGame(userchoice);
    }
    );
});