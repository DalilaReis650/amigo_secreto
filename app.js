
let nomes = [];


const inputNome = document.getElementById("nomeInput");
const lista = document.getElementById("listaNomes");
const resultado = document.getElementById("resultado");
const botaoSortear = document.getElementById("botaoSortear");


function adicionarAmigo() {
  const nomeDigitado = inputNome.value.trim();

  if (nomeDigitado === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  nomes.push(nomeDigitado);
  atualizarLista();          
  inputNome.value = "";      
}


function atualizarLista() {
  lista.innerHTML = "";
  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função para sortear amigo secreto
function sortearAmigo() {
  if (nomes.length === 0) {
    alert("Adicione pelo menos um nome antes do sorteio.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceSorteado];

  resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}