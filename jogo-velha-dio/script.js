//Cria uma variavel para trocar o jogador
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecinado');
var vencedorSelecionado = document.getElementById('vencedor-selecinado')
mudarJogador('x');
function clicouBotao(id) { //usou o id do html para pegar cada quadrado separado. 
    if(vencedor !== null){
        return;
    }
 var quadrado = document.getElementById(id); //pega o elemento quadrado do html para manipular. 
 if (quadrado.innerHTML !== '-'){
     return;
 }//para não deixar que o quadrado possa ser clicado duas vezes

 quadrado.innerHTML = jogador;//trocar o texto do jogador
 quadrado.style.color = '#00CED1';

 if (jogador === 'x'){
     jogador = 'o';
 }else{
     jogador = 'x';
 }
mudarJogador(jogador);
checaVencedor()
  
}
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML &&quadrado2.innerHTML === quadrado3.innerHTML){
        igual = true;
    }
    return igual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#0a0d2d';
        quadrado.style.color = '#0a0d2d';
        quadrado.innerHTML = '-'
    }
    mudarJogador ('x');
}