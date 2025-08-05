const number = document.querySelectorAll(".number");
const display=document.getElementById("display");
let string=""
const del=()=>{
    string=string.slice(0,-1)
    display.innerHTML=string;
}
const restart=()=>{
    string="";
    display.innerHTML=string;
}
number.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
      string=eval(string)
      display.innerHTML=string
      
    }
    else if(e.target.innerHTML=="RESET"){
      restart()
    }
    else if(e.target.innerHTML=="DEL"){
      del()
    }
    else{
      string=string+e.target.innerHTML;
      display.innerHTML=string
    }

  })

})