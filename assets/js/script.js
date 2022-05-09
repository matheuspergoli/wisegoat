const btn = document.querySelector('[data-btn]')
const frase = document.querySelector('[data-frase]')
const url = 'https://api.adviceslip.com/advice'

function gerarFrase() {
  fetch(url)
  .then(response => response.json())
  .then(json => {
    frase.innerText = json.slip.advice
  })
}


if (!btn) {
  if (frase.innerText === '') {
    frase.innerText = 'Gerando frase...'
  }
  
  gerarFrase()
}