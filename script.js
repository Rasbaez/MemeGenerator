const btn = document.querySelector('#btn');
const userText = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const imgMeme = document.getElementById('meme-insert');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const solidBorder = '1px solid black';

function showText() {
  text.innerText = userText.value;
}
showText();

// source https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/

function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

imgMeme.addEventListener('change', readImage);

function fireBorder(event) {
  const fire = '3px dashed rgb(255, 0, 0)';
  memeContainer.style.border = fire
  // if (memeContainer.style.border === solidBorder) {
   
  
}

function whaterBorder() {
  const water = '5px double rgb(0, 0, 255)';
  memeContainer.style.border = water;
  // if (memeContainer.style.border === solidBorder) {
  //   return 
  // // } else {
  // //   return memeContainer.style.border = solidBorder;
  // // }
}

function earthBorder() {
  const earth = '6px groove rgb(0, 128, 0)';
  
   memeContainer.style.border = earth;
  // } else {
  //   return memeContainer.style.border = solidBorder;
  // }
}
