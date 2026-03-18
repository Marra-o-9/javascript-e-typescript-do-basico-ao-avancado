const elementos = [
  { tag: "p", texto: "Parágrafo" },
  { tag: "div", texto: "Divisão" },
  { tag: "section", texto: "Seção" },
  { tag: "footer", texto: "Rodapé" }
];

const container = document.querySelector(".container");
// createElement() -> criar elemento no HTML (tag)
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i]; // desestruturação de objeto
  let elemento = document.createElement(tag);
  // innerText -> adicionar texto
  elemento.innerText = texto;
  // Criar nó de texto
  // let textoCriado = document.createTextNode(texto);
  div.appendChild(elemento);
}

// appendChild -> Adicionar elemento filho na tag
container.appendChild(div);
