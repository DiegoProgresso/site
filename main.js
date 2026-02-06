function carregarCelula(id, arquivo) {
  fetch(arquivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

carregarCelula("c1", "celulas/c1.html");
carregarCelula("c2", "celulas/c2.html");
carregarCelula("c3", "celulas/c3.html");
carregarCelula("c4", "celulas/c4.html");


function abrirSite(url) {
  document.getElementById("c4").innerHTML = `
    <iframe 
      src="${url}" 
      width="100%" 
      height="100%" 
      style="border: none;"
      loading="lazy">
    </iframe>
  `;
}