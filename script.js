const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('succes-message');
const wrongLetterrs_el = document.getElementById('wrong-letter');
const items = document.querySelectorAll('.item')
const message = document.getElementById(`message`);
const PlayAgainBtn = document.getElementById('play-again');

const correctLetters = ['j', 'a', 't', 's'];
const wrongLetterrs = [];
let selectedWord = getRandomWord();


function getElementById() {
    const words = ["javascript", "java", "python"];

    return words[Math.floor(Math.random() * words.length)];

}



function displayWord() {


    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
    
        <div class="letter">
            ${correctLetters.includes(letter) ? letter : ''} 
    
    `).join('')}
    
    
    `;

    const w = word_el.innerText.replace(/\n/g, '')
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'tebrikler'

    }
}

function updateWrongLetter(){
   wrongLetterrs_el.innerHTML =`
   ${wrongLetterrs.length>0?'<h3>hatalı harfler</h3>':''}
   ${wrongLetterrs.map(letter=> `<span>letter</span>`)}
   `;

   items.forEach((item,index) =>{
    const errorCount = wrongLetterrs.length;

    if(index<errorCount){
        item.style.display = 'block';
    }else{
        item.style.display ='none';
    }
   })

   if(wrongLetterrs.length === items.length){
    popup.style.display = 'flex';
        message_el.innerText = 'kaybettiniz';
   }
}

function displayMessage(){
    message.classList.add('show') ;

    setTimeout(function(){
        message.classList.remove('show');
    }, 2000);
}

PlayAgainBtn.addEventListener('click', function(){
    correctLetters.splice(0);
    wrongLetterrs.splice(0);

    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetter();

    popup.style.display ='none';
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if (!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage();
                
            } 
        }else
            {
                if(!wrongLetterrs.includes(letter)){
                    wrongLetterrs.push(letter);
                    updateWrongLetter()
                }

                else{
                    displayMessage();
                }
            }
        }
    }

);
displayWord()
