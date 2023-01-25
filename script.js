function toggleMode() {
  // documentoElement refere-se a tag <html> no index.html
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
  }
}
