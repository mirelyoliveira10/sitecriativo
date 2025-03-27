document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document.getElementById('aumentar-fonte');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('clic', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
})

})