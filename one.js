// let sum=0;
// let n=prompt("Enter the number");
// alert(typeof n);

// for(let i=1;i<=n;i++){
//     sum+=i;
// }

// alert("The sum of the first "+n+" natural numbers is: "+sum);

// let i=0;
// while(true) {
//   console.log(i);
//   i++;
// }

// let marks ={
//     suvo:98,
//     rohan:70,
//     aakash:7
// }

// objectLength = Object.keys(marks).length;
// console.log(objectLength);

// for (let i = 0; i < objectLength; i++) {
//     console.log(Object.entries(marks)[i]);
//     console.log("the marks of "+ Object.keys(marks)[i] + " is "+ marks[Object.keys(marks)[i]]);
// }

// let marks2 ={
//     suvo:80,
//     rohan:75,
//     aakash:72
// }
// for (key in marks2){

//     console.log(key + " : " + marks[key]);

// }

// function getMinNumber(a,b,c,d,e) {
//     let min=a;
//     min = b < min? b : min;
//     min = c < min? c : min;
//     min = d < min? d : min;
//     min = e < min? e : min;
//     return min;
// }

// let x=getMinNumber(10,20,30,40,5);

// console.log("The minimum number is: "+x);


// let arr=[10,20,5,7,4,44,50];

// let a=arr.filter((arr)=>{
//     for(value in arr){
//         return value<10;
//     }
// });
// console.log(a);

// let arr=[1,2,3,4,5,6,7,8,9];
// let fac=(a,(a>0))=>{
//     let b = fac(a-1)*fac(a-2);
//     return b;
// }
// let a=arr.map((value)=>{
//         let c=fac(value);
//         return c;
// })
// console.log(a);

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
          
  console.log(rndInt);