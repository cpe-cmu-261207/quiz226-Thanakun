const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn = document.querySelector("button")

// define more constants and variables here
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");


const text = document.querySelector("#text");
const original = text.innerHTML;

btn_toggle.onclick = () => {
  author.innerText = "630610733 Thanakun Chunkalop";
  let str = author.innerText;
  let number = 630610733;
  let sum = length.value;
  
  let ans = parseInt(number) + parseInt(sum);
  if (btn_toggle.innerText == "Show Calculation") {
    calculation.innerText = ans;
    btn_toggle.innerText = "Show author"
    calculation.style.display = "block";
    author.style.display = "none";
  }else{
    calculation.innerText = str;
    btn_toggle.innerText = "Show Calculation"
    calculation.style.display = "none";
    author.style.display = "block";
  }
}

btn_reset.onclick = () => {
  length.value = 5;
  color.value= "#FFFF00";
  text.innerHTML  = original;
} 


// more codes for Search and Reset buttons here

btn_search.onclick = () => {

  const word = original.split(" ");
  
  var search = " "
  for(let i = 0; i < word.length; i++){
    if(word[i].length > length.value){
      search += "<span style = 'color: " + color.value + "' >" + word[i] + "</span>" + " " 
    }else{
    search += word[i]+" "
    }
  }
  text.innerHTML = search;
}
