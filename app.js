function adicionarAmigo() {
    const nomeAmigos = document.getElementById('amigo').value;
  
    if (nomeAmigos === '') {
      alert('Campo vazio, insira um nome');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = nomeAmigos; // Usar textContent em vez de innerHTML para evitar erros de formatação
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('amigo').value = '';
  }
  
  function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const quantidadeDeAmigos = listaAmigos.children.length;
  
    if (quantidadeDeAmigos === 0) {
      alert('Amigos insuficientes, adicione os nomes para o sorteio');
      return;
    }
  
    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * quantidadeDeAmigos);
    const amigoSorteado = listaAmigos.children[indiceAleatorio].textContent; // Usar textContent para acessar o texto puro
  
    // Exibir o resultado do sorteio
    document.getElementById(
      'resultado',
    ).innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
  
    // Opcional: Limpar lista após o sorteio
    listaAmigos.innerHTML = '';
    document.getElementById('amigo').value = '';
  }
  