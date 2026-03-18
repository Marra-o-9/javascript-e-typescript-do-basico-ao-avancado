const elementos = [
  { tag: "p", texto: "Parágrafo" },
  { tag: "div", texto: "Divisão" },
  { tag: "section", texto: "Seção" },
  { tag: "footer", texto: "Rodapé" }
];

console.log(elementos[0]);
tagsHTML = document.querySelector(".container");

for (let i = 0; elementos.length; i++) {
  const { tag, texto } = elementos[i];
  tagsHTML.innerHTML += `<${tag}>${texto}</${tag}>`;
}