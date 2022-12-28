const word_el = document.getElementById("word");
const popup = document.getElementById('popuo-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letter');
const items = document.querySelectorAll('.item');
const message_el = document.getElementById('message');

const correctLetters =['j','a','t','s','p','v'];
const wrongLetters =[]
const selectedWord = getRandomWord();




function getRandomWord() {
  const words = ["javascript", "java", "python"];

  return words[Math.floor(Math.random() * words.length)];
}


function displayWord() {
  

  word_el.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter: ''}
        
        </div>
    
    `
      )
      .join("")}`;

      const w = word_el.innerText.replace(/n/g,'');
      if (w === selectedWord) {
         popup.style.display = 'flex';
         message_el.innerText = ' tebrikler';
      }
}

function updateWrongLetter(){
    wrongLetters_el.innerHTML =`
    ${word_el.length>0?'<h3> hatalı harf</h3>':''}
    ${wrongLetters.map(letter=> `<span>${letter}</span>`)}
    `;

    items.forEach((item.index) => {
   
        const errorCount = wrongLetters.length

        if(indexerrorCount){
            items.style.display = 'block';
        }else{
            items.style.display = 'none';
        }
    })

    if(wrongLetters.length === items.length){
        popup.style.display = 'flex';
        message_el.innerText = 'kaybettin';
    }
}

window.addEventListener('keydown',function(e){
    if (e.keyCode >= 65 && e.keyCode <= 90){
       const letter = e.key;

       if (selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else {
                    message_el.classList.add('show');
            }
       }else {
        if(wrongLetters.includes(letter)) {
            !wrongLetters.push(letter);
            updateWrongLetter();
        }
       }
        
    }
    
})

displayWord()
