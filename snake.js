function startGame(){

    // 1:snake 2:water 3:gun
    
    let comShow;
    let count=0;
    let com=0;
    let user=0;
    var run=1;
    while(run!=0){

        let playerChoice=prompt("Choose 1:snake 2:water 3:gun ::--> ");
    let computerChoice = Math.floor(Math.random()*3)+1;
        if(computerChoice==playerChoice){
            alert("It's a tie! Try again.");
            count++;
        }
        else if((playerChoice==1 && computerChoice==2) || (playerChoice==2 && computerChoice==3) || (playerChoice==3 && computerChoice==1)){
            switch(computerChoice){
                case 1:
                    comShow="snake";
                    break;
                case 2:
                    comShow="water";
                    break;
                case 3:
                    comShow="gun";
                    break;
            }
            alert("You win! Computer chose "+comShow);
            user++;
        }
        else{
            switch(computerChoice){
                case 1:
                    comShow="snake";
                    break;
                case 2:
                    comShow="water";
                    break;
                case 3:
                    comShow="gun";
                    break;
            }
            alert("Computer wins! Computer chose "+comShow);
            com++;
        }

        run=prompt("continue press any key other wise Exit this game press");
        console.log("user:"+playerChoice+" computer:"+computerChoice);



    }

    alert("Final Score:\nUser : "+user+"\nComputer : "+com+"\nTotal Ties : "+count);
    alert( (user>com) ? "ultimate winner user":"ultimate winner computer")

   } 

