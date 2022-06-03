const btn = document.querySelector('#btn');
const userText = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const imgMeme = document.getElementById('meme-insert');

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

