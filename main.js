    const $teste = document.getElementById('teste');
for(let i = 1; i <= 9; i++)
{
    $teste.innerHTML += '<div id="jogodavelha'+i+'" class="jogodavelha"><p id="jogador1">X</p> <p id="jogador2">O</p></div>';
}

    const $jogodavelha = document.querySelectorAll('.jogodavelha');
    var contador = 0

for(let i = 0; i < $jogodavelha.length; i++){
    $jogodavelha[i].addEventListener('click', function(){

    const $jg1 = this.querySelector('#jogador1');
    const $jg2 = this.querySelector('#jogador2');
    contador++;
     
    if (contador % 2 !== 0 && $jg2.style.display !== 'inline-block'){
            return $jg1.style.display = 'inline-block';
        }

    if (contador % 2 == 0 && $jg1.style.display !== 'inline-block'){
            return $jg2.style.display = 'inline-block';
    }
    
    });
}