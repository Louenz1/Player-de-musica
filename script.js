let musicas = [
    {titulo:'Decode', artista:'Paramore', src:'Musicas/Decode (Acoustic Version).mp3', img:'Imagens musica/Paramore - Decode.jpg'},
    {titulo:'Idfc ', artista:'Blackbear', src:'Musicas/Blackbear - idfc .mp3', img:'Imagens musica/Blackbear - idfc.jpg'},
    {titulo:'Hole In My Soul', artista:'Aerosmith', src:'Musicas/Aerosmith__Hole In My Soul (Traducida Al Español).mp3', img:'Imagens musica/Aerosmith  - Hole in my soul.jpg'},
    {titulo:'Not Strong Enough', artista:'Apocalyptica', src:'Musicas/Apocalyptica - Not Strong Enough ft. Brent Smith (Sub Español).mp3', img:'Imagens musica/Apocalyptica - Not Strong Enough.jpg'},
    {titulo:'Im With You', artista:'Avril Lavigne', src:'Musicas/Avril Lavigne - Im With You (AOL Sessions).mp3', img:'Imagens musica/Avril Lavigne - Im with you.jpg'},
    {titulo:'Nothin On You', artista:'Bruno Mars', src:'Musicas/B.o.B - Nothin On You ft. Bruno Mars (Lyrics) _ Bruno Mars, Jason Mraz,... (320 kbps).mp3', img:'Imagens musica/B.o.B - Nothin On You.jpg'},
    {titulo:'Locked Out Of Heaven', artista:'Bruno Mars', src:'Musicas/Bruno Mars - _Locked Out Of Heaven_ [Live @ SiriusXM].mp3', img:'Imagens musica/Bruno Mars - Locked Out Of Heaven.jpg'},
    {titulo:'I will Be Good', artista:'Jaymes Young', src:'Musicas/Ill Be Good .mp3', img:'Imagens musica/Jaymes Young - Ill Be Good.jpg'},

];

document.querySelectorAll(".botao-menu").forEach(multiAction => {
    const menuButton = multiAction.querySelector(".botao-background");
    const list = multiAction.querySelector(".botao-background-lista");

    menuButton.addEventListener("click", () => {
        list.classList.toggle("botao-background-lista-visivel");
    });
});

var ligardesligarfixo = false;

function botaoligardesligarfixo() {
    if (ligardesligarfixo) {
        desligarbotaoligardesligarfixo()
    } else {
        ligarbotaoligardesligarfixo()
    }
}

function desligarbotaoligardesligarfixo() {
    document.getElementsByClassName('divbackgroundfixo')[0].style.display = 'none';
    ligardesligarfixo = false;
}

function ligarbotaoligardesligarfixo() {
    document.getElementById('centralizar').style.display = 'inline-block';
    document.getElementsByClassName('divbackgroundfixo')[0].style.display = 'block';
    ligardesligarfixo = true;
}

function alterarFundo(video) {
    var videoSource = document.getElementById('video-source');
    videoSource.src = video;
  
    var fundoVideo = document.getElementById('fundo-video');
    fundoVideo.load();
    fundoVideo.play();
}

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');

button1.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/1.jpg')";
});

button2.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/2.jpg')";
});

button3.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/3.jpg')";
});

button4.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/4.jpg')";
});

button5.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/5.jpg')";
});

button6.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/6.jpg')";
});

button7.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('backgrounds/7.jpg')";
});

// Player Musica

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.imgMusicas');
let nomeMusica = document.querySelector('.descrição h2');
let nomeArtista = document.querySelector('.descrição i');

renderizarMusica(indexMusica);

// Eventos player música
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 7;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    indexMusica++;
    if (indexMusica > 7) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

//Eventos relógio

function atualizarTempo() {
    var display = document.querySelector('.displayrelogio');
    var agora = new Date();
    var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());
    display.textContent = horario;
}

function corrigirHorario(numero) {
    if (numero <10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);



