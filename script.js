let player1Name;
let player2Name;
let playersName;
let txtWord;
let guessWord;
let count;
let livess = 3;
let flag=0;
function start() {
    let game = document.querySelector("#game");
    player1Name = document.querySelector("#player1").value;
    player2Name = document.querySelector("#player2").value;
    playersName = document.querySelector("#playersName");
    game.style.display="block";
    players.style.display="none";
    //display the div when user click play//
    playersName.innerHTML += "Welcome " +  player1Name + " & " +  player2Name;
}

function guess() {
    txtWord = document.querySelector("#txtWord").value;
    document.querySelector("#txtWord").value="";
    let hint1 = document.querySelector("#hint1").value;
    document.querySelector("#hint1").value = "";
    //for empty text box//
    let str="";
    for(let k=0;k<txtWord.length;k++){
      if(k%2==0){
      str+=txtWord.charAt(k);  
    }else{
      str+="_";
      
    }
       let hint = "";
       let temp = txtWord;
       document.querySelector("#hint").innerHTML = "<br>"+ hint1+"<br>"+str;

       // for(let i=0;i<txtWord.length;i+=2){
       //  temp[i] = "_ ";
       // }
       // console.log(temp);
    }
    

}

function check(){
    let result = document.querySelector("#result");
    let lives = document.querySelector("#lives");
    guessWord = document.querySelector("#guessWord").value;
    result.innerHTML = "";
 
    
    if (guessWord == txtWord) {
        result.innerHTML += "YOU WIN";
        flag =1;
    }
    
    else{
        livess--;
        if(livess == 2){
            lives.innerHTML = `
            <i id="life2"  class="fas fa-heart"></i>
            <i id="life3"  class="fas fa-heart"></i>`
        }
        else if(livess == 1){
            lives.innerHTML = `
            <i id="life2"  class="fas fa-heart"></i>
           
        `
        }
        else if(livess == 0){
            // alert("Too lose");
            tryagain();
        }
    }
}
        
    while(count<3){
        guess();
        count++;
    }
    if(count===3){
        result.innerHTML += "YOU Lose";
    }
        
    
    

while(count<3 && flag!=1){
    guess();
}

function tryagain(){
    count = 0;
    flag = 0;
    // player1Name = document.querySelector("#try").value;
    let lose = document.querySelector("#lose");
    game.style.display="none";
    again.style.display="block";
    lose.innerHTML = "Too Lose"
    
}

function reload() {
    location.reload();

}
