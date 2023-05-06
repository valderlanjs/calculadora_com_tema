// Selecionando o elemento com id "display" e armazenando na constante "display".
const display = document.querySelector("#display");
// Selecionado todos os botões e armazenando na constante "buttons".
const buttons = document.querySelectorAll("button");
// Adicionando um evento de clique em cada botão selecionado.
buttons.forEach((item) => {
  item.onclick = () => {
    // Verificando se o botão clicado tem o id "clear".
    if (item.id == "clear") {
      // Se tiver, limpa o conteúdo do elemento com id "display".
      display.innerText = "";
      // Verificando se o botão clicado tem o id "backspace".
    } else if (item.id == "backspace") {
      // Se tiver, obtém o conteúdo do elemento com id "display" como uma string.
      let string = display.innerText.toString();
      //Remove o último caractere e atribui o resultado de volta ao elemento "display".
      display.innerText = string.substr(0, string.length - 1);
      // Verificando se o elemento "display" não está vazio e se o botão clicado tem o id "equal".
    } else if (display.innerText != "" && item.id == "equal") {
      // Se sim, avalia a expressão matemática presente no elemento "display" e atribui o resultado de volta ao elemento "display".
      display.innerText = eval(display.innerText);
      // Verificando se o elemento "display" está vazio e se o botão clicado tem o id "equal".
    } else if (display.innerText == "" && item.id == "equal") {
      // Se sim, atribui a string "Vazio!" ao elemento "display" e depois de 2 segundos limpa o conteúdo do elemento "display".
      display.innerText = "Vazio!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      // Se não for nenhum dos casos anteriores, concatena o id do botão clicado ao conteúdo do elemento "display".
      display.innerText += item.id;
    }
  };
});

// Selecionando o botão de alternância de tema e armazenando na constante "themeToggleBtn"
const themeToggleBtn = document.querySelector(".theme-toggler");
// Selecionando o elemento com classe "dark" e armazenando na constante "calculator"
const calculator = document.querySelector(".dark");
// Selecionando o ícone de alternância de tema e armazenando na constante "toggleIcon"
const toggleIcon = document.querySelector(".toggler-icon");

// Definindo a variável "isDark" como verdadeira
let isDark = true;

// Adicionando um evento de clique ao botão de alternância de tema.
themeToggleBtn.onclick = () => {
  // Alternando a classe "dark" do elemento "calculator" para alternar o tema.
  calculator.classList.toggle("dark");
  // Alternando a classe "active" do botão de alternância de tema para mudar o ícone.
  themeToggleBtn.classList.toggle("active");
  // Alterando o valor da variável "isDark" para o valor oposto.
  isDark = !isDark;
};
