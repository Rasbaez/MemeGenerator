const userText = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const inputValue = document.getElementById('meme-insert');
// const galleryImgs = document.querySelectorAll('.gallery');
const getImgTags = document.querySelectorAll('img');

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

inputValue.addEventListener('change', readImage);

function fireBorder() {
  const fire = '3px dashed rgb(255, 0, 0)';
  memeContainer.style.border = fire;
  // if (memeContainer.style.border === solidBorder) {
}

function whaterBorder() {
  const water = '5px double rgb(0, 0, 255)';
  memeContainer.style.border = water;
}

function earthBorder() {
  const earth = '6px groove rgb(0, 128, 0)';

  memeContainer.style.border = earth;
}

function setImg(event) {
  getImgTags[0].src = event.target.src;
}

for (let i = 0; i < getImgTags.length; i += 1) {
  const img = getImgTags[i];
  img.addEventListener('click', setImg);
}
