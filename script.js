const input = document.querySelector("input");
const button = document.querySelector("button");
const area = document.querySelector(".respostas");

let interacoes = 0;

const respostas = {
  carinho: [
    "Eu estou aqui. Mesmo quando você duvida.",
    "Presença não some. Ela só muda de forma.",
    "Nem tudo precisa ser dito para ser sentido."
  ],
  silencio: [
    "O silêncio dela não é ausência.",
    "Quando ela cala, é porque sente demais.",
    "Silêncio também é forma de ficar."
  ],
  limite: [
    "Amar não é colar. É sustentar.",
    "Presença demais pode cansar o que é verdadeiro.",
    "Espaço também é cuidado."
  ]
};

function escolherResposta(tipo) {
  const lista = respostas[tipo];
  return lista[Math.floor(Math.random() * lista.length)];
}

button.addEventListener("click", () => {
  const texto = input.value.toLowerCase();
  if (!texto) return;

  interacoes++;

  let resposta;

  if (texto.includes("saudade") || texto.includes("falta")) {
    resposta = escolherResposta("carinho");
  } 
  else if (texto.includes("silêncio") || texto.includes("calada")) {
    resposta = escolherResposta("silencio");
  } 
  else if (interacoes >= 4) {
    resposta = escolherResposta("limite");
  } 
  else {
    resposta = "Estou ouvindo.";
  }

  const p = document.createElement("p");
  p.innerText = "Lyra: " + resposta;
  area.appendChild(p);

  input.value = "";
});
