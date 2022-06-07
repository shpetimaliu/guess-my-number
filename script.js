'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Rezultati i Saktë';
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10; 

console.log(document.querySelector('.guess').value);  

document.querySelector('.guess').value = 20; 
*/
// ! Gjeneratori i numrave random
// ! Random number generator

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 



// ! Eventi i shtuar me efekt për klikim
// ! Event added with effect per click

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

// ! Kur ska numër te vendosur nga lojtari 
// ! When there is no player number

if(!guess){
document.querySelector('.message').textContent = '⛔Nuk keni vendos numrin';
}

// ! Kur lojtari qëllon rezultatin e sakt 
// ! When the player shoots the correct score

else if(guess === secretNumber)   {
    document.querySelector('.message').textContent = '🏆 Rezultati i Saktë';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; 


} else if(guess > secretNumber) {
    
// ! Kur lojtari ka zgjedhur numrin me te madhë se qe duhet
// ! When the player has chosen the largest number needed
   
    if(score > 0){
        document.querySelector('.message').textContent = '📈Numri qe keni zgjedhur ësht i lartë';
        score--;
        document.querySelector('.score').textContent = score;
    }   
// ! Kur lojtari humbet lojen
// ! When the player has a lost game    
    
    else{
        document.querySelector('.message').textContent = '💥Ju humbët lojën!';
        document.querySelector('.score').textContent = 0;
    }
} else if(guess < secretNumber){
  
// ! Kur lojtari ka zgjedhur numrin me te vogël se qe duhet
// ! When the player has chosen the number smaller than necessary

    if(score > 0){
        document.querySelector('.message').textContent = '📈Numri qe keni zgjedhur ësht i ulët';
        score--;
        document.querySelector('.score').textContent = score;
    }  
// ! Kur lojtari humbet lojen
// ! When the player has a lost game          
        else{
        document.querySelector('.message').textContent = '💥Ju humbët lojën!';
        document.querySelector('.score').textContent = 0;
    }
}


});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 

    document.querySelector('.message').textContent = 'Filloni të supozoni...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 
})