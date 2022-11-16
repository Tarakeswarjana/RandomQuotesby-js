const quote = document.getElementById("h2");
const auther =document.getElementById("p");

const f1=(data)=>{
    quote.innerHTML=data.quote;
   
    auther.innerHTML=`...by    ${data.person}`;
}

// function f(){
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function (){
//     if(this.readyState==4 && this.status==200){
//       var data=this.responseText;
//       console.log(data);
//       f1(data)
//     }else if(this.readyState==4 && this.status==404){
//     console.log("not found");
//     }
    
//     }
//     xhttp.open("GET","https://motivational-quote-api.herokuapp.com/quotes/random",true);
//     xhttp.send();
   
//     }
//     f()

function f(){
fetch('https://motivational-quote-api.herokuapp.com/quotes/random')
  .then((response) => response.json())
  .then((data) => {console.log(data);
  f1(data);
});}
f();
    

// random api:https://motivational-quote-api.herokuapp.com/quotes/random


const button = document.getElementById("btn1");
button.addEventListener("click", ()=>{f()});;



