const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");

const colors = ["yellow", "red", "green", "blue"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  //bodyBg.style.backgroundColor = colors[2];
  let randomColor = Math.floor(Math.random()*colors.length);
  bodyBg.style.backgroundColor = colors[randomColor];
}

//hex color code
const hexBtn = document.querySelector(".hexBtn");
const hexCode = document.querySelector('.hex');

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



hexBtn.addEventListener('click', getHexCode);

function getHexCode(){

    let hexColor = '#';

    for(let i=0; i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[random];
    }
    hexCode.innerHTML = hexColor;
    bodyBg.style.backgroundColor = hexColor;
}

