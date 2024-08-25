const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Passando num cruzamento, de carro, você se depara com uma pessoa segunrando um cartaz escrito: 'FOME'. Qual a sua atitude?",
        alternativas: [
            {
                texto: "Sente-se comovido pela pessoa!",
                afirmacao: "Arruma uns trocados que encontra no momento e oferta à pessoa, como ajuda para quem está com fome."
            },
            {
                texto: "Não liga para a pessoa!",
                afirmacao: "Não dá nenhuma atenção, pois julga que a pessoa quer ajuda para o consumo de drogas ilícitas."
            }
        ]
    },
    {
        enunciado: "Num outro cruzamento, encontra uma senhora com três criânças pequenas, pedindo ajuda financeira. Qual o seu comportamento?",
        alternativas: [
            {
                texto: "Nao dá a mínima atenção!",
                afirmacao: "A cena não chama a atenção, pois tem muitas pessoas utilizando de artimanhas para impressionar ou comover outras, utlizando crianças."
            },
            {
                texto: "Solidariza-se com a situação!",
                afirmacao: "Ajuda na medida do possível, com gorjetas, para tentar melhorar a situação dessa senhora com as crianças pequenas, expostas na rua."
            }           
        ]
    },
    {
        enunciado: "Para estacionar o seu veículo, ao ir em alguma loja, qual a sua posição?",
        alternativas: [
            {
                texto: "Procura um lugar na rua, mesmo que fique um pouco longe do estabelecimento!",
                afirmacao: "Mesmo sendo difícil arrumar vaga para estacionar e dos perigos, deixa o veículo na rua, para diminuir os gastos financeiros."
            },
            {
                texto: "Procura um estaciomento particular!",
                afirmacao: "Considera mais seguro o estacionamento particular, mais confotável, mesmo que tenha uma despesa maior."
            }                    
        ]
    },
    {
        enunciado: "Para fechar o dia, precisa passar no supermercado e fazer algumas compras. Como se comportas?",
        alternativas: [
            {
                texto: "Faz compras apressadas, sem ver direito os preços!",
                afirmacao: "Faz as compras correndo, sem consultar direito os preços e validade dos produtos, para chegar logo na fila do caixa e, ir para casa."
            },
            {
                texto: "Procura ver com calma os itens disponíveis!",
                afirmacao: "Analisa os produtos disponíveis, buscando melhores preços e validade, mesmo que atrase um pouco."
            }
        ]
    },
    {
        enunciado: "Na volta para casa, muitos carros, o trânsito não está fluindo de acordo. Como você faz?",
        alternativas: [
            {
                texto: "Tenta driblar os outros carros, forçando mudanças de faixas, e acelerar bem quando possível!",
                afirmacao: "Não gosta de andar devagar e não vê a hora de chegar em casa. Está estressado e é agressivo no trânsito!"
            },
            {
                texto: "Mantém a calma no trânsito, seguindo na sua pista e não se excedendo na velocidade!",
                afirmacao: "Mesmo com vontade de chegar logo em casa, segue o fluxo da pista com paciência. Gosta de dirigir defensivamente!"
            }            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();    
}

function mostraResultado(){
    caixaPerguntas.textContent = "Nesse dia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();