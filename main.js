(()=> {
  const input = document.querySelector('.email');
  const botao = document.querySelector('.botao-iniciar');

  botao.addEventListener('click', () => {
    if (validaEmail(input.value)) {
      alert('Email inválido')
    } else {
      emailInvalido();
    }
  });

  input.addEventListener('blur', () => {
    if(!validaEmail(input.value)) {
      emailInvalido();
    }
  });

  function validaEmail(email) {
    const usuario = email.substring(0, email.indexOf('@'));
    const dominio = email.substring(email.indexOf('@')+1, email.length);

    if((usuario.length >= 1) &&
      (dominio.length >= 3) &&
      (usuario.search('@') == -1) &&
      (dominio.search('@') == -1) &&
      (usuario.search(' ') == -1) &&
      (dominio.search(' ') == -1) &&
      (dominio.search('.') != -1) &&
      (dominio.indexOf('.') >= 1) &&
      (dominio.lastIndexOf('.') < dominio.length - 1)) {
        return true;
      } else {
        return false;
      }
  }

  function emailInvalido() {
    const erro = '<span class="invalid-email">Please enter a valid email address</span>';
    input.insertAdjacentHTML('beforebegin',erro);

  }

})();