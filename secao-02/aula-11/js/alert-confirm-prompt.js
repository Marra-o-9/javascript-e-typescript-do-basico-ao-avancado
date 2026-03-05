// Atalhos para as funções que estão dentro do objeto window (navegador)
alert("Mensagem."); // window.alert() -> undefined

confirm("Pog?"); // window.confirm() -> valor booleano

prompt("Digite seu nome:"); // window.prompt -> string

// Salvar valor na memória (armazenar na variável):
const confirmar = confirm("Deseja continuar?");
console.log(confirmar);