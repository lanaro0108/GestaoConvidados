const form = document.getElementById("form-cadastro");
const lista = document.getElementById("lista-convidados");
const erro = document.getElementById("erro-msg");
const contador = document.getElementById("contador");
const btnTema = document.getElementById("btn-tema");

// campos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const empresa = document.getElementById("empresa");
const tipo = document.getElementById("tipo");

const campos = [nome, email, telefone, empresa, tipo];

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let vazio = false;

  campos.forEach(campo => {
    if (!campo.value.trim()) {
      vazio = true;
    }
  });

  if (vazio) {
    erro.innerText = "Preencha todos os campos!";
    erro.style.display = "block";
    return;
  }

  erro.style.display = "none";

  adicionarConvidado();
  limparForm();
  atualizarContador();
});

function adicionarConvidado() {
  const li = document.createElement("li");
  li.classList.add("card");

  li.innerHTML = `
    <strong>${nome.value}</strong><br>
    ${email.value}<br>
    ${telefone.value}<br>
    ${empresa.value}<br>
    <em>${tipo.value}</em><br>
    <button class="btn-remover">Remover</button>
  `;

  li.querySelector(".btn-remover").addEventListener("click", () => {
    li.remove();
    atualizarContador();
  });

  lista.appendChild(li);
}

function atualizarContador() {
  contador.innerText = lista.children.length;
}

function limparForm() {
  form.reset();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    limparForm();
  }
});