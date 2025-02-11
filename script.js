document.addEventListener('DOMContentLoaded', function() {
  const contatoSection = document.querySelector('#contato');
  const btnMensagem = document.createElement('button');
  
  btnMensagem.textContent = 'Clique para dizer Olá!';
  btnMensagem.style.padding = '10px 20px';
  btnMensagem.style.backgroundColor = '#007bff';
  btnMensagem.style.color = 'white';
  btnMensagem.style.border = 'none';
  btnMensagem.style.borderRadius = '5px';
  btnMensagem.style.cursor = 'pointer';
  btnMensagem.style.marginTop = '10px';

  btnMensagem.addEventListener('click', function() {
    alert('Olá! Obrigado por visitar meu site! 😊');
  });

  contatoSection.appendChild(btnMensagem);
});
