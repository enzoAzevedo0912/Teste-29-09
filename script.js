//DOM

const capa = document.querySelector('#capa')
const texto = document.querySelector('#texto')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

//Eventos

bt1.addEventListener('click',Velozes_Furiosos1)
bt2.addEventListener('click',Velozes_Furiosos2)
bt3.addEventListener('click',Velozes_Furiosos3)
bt4.addEventListener('click',Velozes_Furiosos4)


//Ação

function Velozes_Furiosos1(){
    capa.src = 'images/gemini 01.jpg'
    texto.innerHTML = `Lançado em 2001, Velozes & Furiosos (The Fast and the Furious) é o filme que deu início a uma das franquias mais lucrativas do cinema. Dirigido por Rob Cohen, a trama mistura o submundo das corridas de rua ilegais em Los Angeles com uma investigação policial de alta octanagem. <br> A trama acompanha Brian O'Conner (Paul Walker), um agente sob disfarce da polícia de Los Angeles (LAPD) e do FBI. Brian é encarregado de investigar uma vaga de roubos audaciosos a camiões de carga, executados por uma equipa experiente que utiliza carros Honda Civic modificados com luzes de néon.

Para avançar na investigação, Brian infiltra-se no circuito de corridas clandestinas noturnas e aproxima-se de Dominic Toretto (Vin Diesel), uma lenda local das pistas e dono de uma oficina mecânica. À medida que se ganha o respeito do grupo, Brian vive dois dilemas centrais:`
}

function Velozes_Furiosos2(){
    capa.src = 'images/gemini 02.jpg'
    texto.innerHTML = `Velozes e Furiosos 2 (2 Fast 2 Furious, 2003), realizado por John Singleton, é a sequela direta do primeiro filme. Desta vez ambientado em Miami, o filme foca-se na cultura de corridas de rua em tons mais vibrantes, introduzindo novos elementos cruciais para a expansão da franquia. <br> Após ter deixado Dominic Toretto escapar no primeiro filme, Brian O'Conner (Paul Walker) perdeu o seu distintivo policial e fugiu de Los Angeles. Agora a viver em Miami, Brian ganha a vida a participar em corridas clandestinas organizadas pelo seu amigo Tej Parker (Ludacris).

No entanto, Brian é capturado pelo FBI e pelos agentes alfandegários. Em troca do perdão total dos seus crimes, aceita uma missão sob disfarce: derrubar Carter Verone (Cole Hauser), um perigoso barão da droga argentino que usa corridas e transporte de rua para lavar dinheiro.

Para esta missão, Brian exige escolher o seu próprio parceiro e viaja até Barstow para recrutar Roman Pearce (Tyrese Gibson), um amigo de infância que está em liberdade condicional e guarda ressentimento contra Brian por este se ter tornado polícia. A dupla infiltra-se na organização de Verone como condutores de transporte, contando com a ajuda secreta de Monica Fuentes (Eva Mendes), uma agente disfarçada da alfândega que se passou por amante de Verone.`
}

function Velozes_Furiosos3(){
    capa.src = 'images/gemini03.jpg'
    texto.innerHTML = `Velozes e Furiosos: Desafio em Tóquio (The Fast and the Furious: Tokyo Drift, 2006), realizado por Justin Lin, é o terceiro filme da franquia. Afastando-se das personagens e da narrativa dos dois primeiros filmes, a história transfere-se para o Japão e introduz uma vertente totalmente nova do automobilismo: a arte do drifting. <br> O protagonista é Sean Boswell (Lucas Black), um adolescente americano rebelde com um histórico de corridas de rua ilegais e problemas com a polícia. Para evitar a prisão nos EUA após destruir a propriedade de um bairro numa corrida, Sean é enviado para viver com o seu pai, um militar reformado instalado em Tóquio.

Em Tóquio, Sean sente-se isolado pela barreira cultural e linguística, até conhecer Twinkie (Bow Wow), que o introduz no submundo das corridas noturnas em garagens subterrâneas. É neste cenário que Sean descobre o drifting (derrapagem controlada em curvas apertadas) e é rapidamente humilhado numa corrida contra Takashi (Brian Tee), conhecido como o "Rei do Drift" (Drift King / DK), que possui ligações diretas à Yakuza (a máfia japonesa).

Para pagar a dívida do carro que destruiu na corrida contra Takashi, Sean começa a trabalhar para Han Lue (Sung Kang), o parceiro de negócios de Takashi. Han torna-se o mentor de Sean, ensinando-lhe não só a dominar a tática do drift, mas também a importância do respeito e da lealdade. O conflito intensifica-se quando Sean se aproxima de Neela (Nathalie Kelley), namorada de Takashi, e quando Han começa a desviar dinheiro do tio de Takashi, um chefe da Yakuza.`
}

function Velozes_Furiosos4(){
    capa.src = 'images/gemini 04.jpg'
    texto.innerHTML = `Velozes e Furiosos 4 (Fast & Furious, 2009), realizado por Justin Lin, marca o regresso da equipa e das personagens originais do primeiro filme — Dominic Toretto, Brian O'Conner, Letty Ortiz e Mia Toretto. O filme funciona como uma sequela direta dos dois primeiros e reposiciona a franquia de simples corridas de rua para o género de ação e thrillers policiais de grande escala. <br> A história começa com Dominic Toretto (Vin Diesel) a liderar uma equipa de assaltos a camiões-cisterna na República Dominicana. Para proteger a sua namorada Letty (Michelle Rodriguez) e os seus amigos da atenção das autoridades internacionais, Dom decide abandoná-los e fugir. Pouco tempo depois, recebe a notícia de que Letty foi assassinada em Los Angeles.

Movido pela vingança, Dom regressa aos EUA para encontrar o assassino. Em Los Angeles, os seus passos cruzam-se com os de Brian O'Conner (Paul Walker), agora um agente do FBI encarregado de capturar Arturo Braga, um misterioso e perigoso barão do cartel de droga mexicano.

Ambos descobrem que Letty estava a trabalhar disfarçada para o FBI sob as ordens de Brian, numa tentativa de limpar o nome de Dom para que este pudesse voltar para casa. A busca comum pela pessoa que matou Letty leva Dom e Brian a participarem numa corrida de recrutamento organizada pelo cartel de Braga, onde ganham posições como pilotos de transporte de droga através da fronteira entre o México e os Estados Unidos, utilizando túneis subterrâneos secretos.`
}