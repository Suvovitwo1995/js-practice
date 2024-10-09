function numberGame(){
    function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const rndInt = randomIntFromInterval(1, 100);
console.log(rndInt);
var chance=10;
while(chance>0){
    let n = prompt("Enter a number in between 1 to 100");

    if(n>0 && n<101){
        if(n==rndInt && chance>1){
        alert(`Congratulations! You choose the correct number before ${chance} chance left`);
        break;
        }
        else if(n==rndInt && chance==1){
        alert(`Congratulations! You choose the correct number in your last chance`);
        break;
        }
        else{

            if(rndInt>n){
                alert("You must be choose another greater number");
            }
            else{
                alert("You must be choose another lesser number");
            }

        }
    }
    else{
        alert("You Choose The Number Only In Between 1 to 100");
    }
    chance=chance-1;
    alert(`You have ${chance} left`);
}

    if(chance==0){
    alert("Game Over ! Better Luck next time");
}

console.log(rndInt);}