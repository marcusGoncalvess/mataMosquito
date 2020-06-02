function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1' //Não precisa de break pq quando chega em um return ele finaliza o processo da function
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA' //Não precisa de break pq quando chega em um return ele finaliza o processo da function
        case 1:
            return 'ladoB'
    }
}

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
    }
    ajustaTamanho()
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onmousedown = function() {
        this.remove() //o this remove o próprio elemento html da tela
    }
}

var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var criaMosquitoTempo = 1500
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro) // Parar o Interval
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}