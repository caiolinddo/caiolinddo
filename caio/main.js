function tocaSomPom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento nao encontrado')
    }

    if (elemento !=null) {
        console.log(elemento.localName === 'audio');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador <listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (evento) {
        tocaSomPom(idAudio);
    }

    tecla.onekeydown = function (evento){

        console.log(evento.code == 'Space')

        if(evento.code === 'Space') {
            tecla.classList.add('ativa');
    }
    
    }

    tecla.onekeyup = function () {
        tecla.classList.remove('ativa');
    }

}
