function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilme = document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML =
      elementoListaFilme.innerHTML + elementoFilmeFavorito;
  }