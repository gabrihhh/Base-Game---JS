
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');
canvas.style.border = '1px solid black';
//AQUI INSTANCIAR OS PLAYERS E OBJETOS


//NÃO MEXER NO INIT QUE ELE ESTÁ PRONTO
function init(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();
    move();
    colision();

    requestAnimationFrame(init);
}
function draw(){
    ctx.beginPath();
    //AQUI ENTRA A CRIAÇÃO DAS COISAS NA TELA

    //DRAW ACABA AQUI
    ctx.closePath();
}
function move(){
    //AQUI ENTRA A MOVIMENTAÇÃO E MANIPULAÇÃO DOS OBJETOS

    //MOVIMENTACAO ACABA AQUI
}
function colision(){
    //AQUI ENTRA A COLISAO

    //COLISÃO ACABA AQUI
}
init()