// NodeList
// - comportamento muito parecido com um array, mas é um artifício do DOM

// Selecionará apenas o primeiro parágrafo
const paragrafos = document.querySelector(".paragrafos");

// Captura todas as tags p dentro de parágrafos
const pTags = paragrafos.querySelectorAll("p");

// Pegar elemento de estilo do CSS
const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;

for (let p of pTags) {
  // todas as propriedades de CSS, no JS se transformam em camelCase:
  // background-color -> backgroundColor
  p.style.backgroundColor = bgColorBody;
  p.style.color = "#fff";
}
