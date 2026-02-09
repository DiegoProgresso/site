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

function abrirFormulario() {
  document.getElementById("c4").innerHTML = `
    <form 
      class="form-contato"
      action="https://formspree.io/f/xzdazrvn"
      method="POST"
    >
      <h2>Contato</h2>

      <label>
        Nome
        <input type="text" name="nome" required>
      </label>

      <label>
        Email
        <input type="email" name="email" required>
      </label>

      <label>
        Data de nascimento
        <input type="date" name="data_nascimento">
      </label>

      <label>
        Mensagem
        <textarea name="mensagem" required></textarea>
      </label>

      <button type="submit">Enviar</button>
    </form>
  `;
}