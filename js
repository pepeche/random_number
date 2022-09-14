function randomNumber(min,max){
    return parseInt(Math.floor((Math.random()*(max-min + 1)) + min));}

let button1 = document.getElementById('button_1').addEventListener('click', function(){
    result_button1.innerText = parseInt(randomNumber(1,100));
});

let button2 = document.getElementById('button_2').addEventListener('click', function(){
    result_button2.innerText = parseInt(randomNumber(1,100));
});

let calculer = document.getElementById('calculer').addEventListener('click',function(){
    let nb1 = result_button1.innerText;
    let nb2 = result_button2.innerText

    resultat_multiply.innerText = nb1 + " multiplié par " + nb2 + " = " + (Math.floor((nb1*nb2)*100)/100);

    
    resultat_divider.innerText = nb1 + " divisé par " + nb2 + " = " + (Math.floor((nb1/nb2)*100)/100);
    
    
    resultat_addition.innerText = nb1 + " plus " + nb2 + " = " + (parseInt(nb1) + parseInt(nb2));
    
    
    resultat_soustraire.innerText = nb1 + " moins " + nb2 + " = " + (parseInt(nb1) - parseInt(nb2));
});


function clear(){window.location.reload()}
