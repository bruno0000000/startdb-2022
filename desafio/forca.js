class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavra = new Array(palavraSecreta.length + 1).join("_").split("");
    this.letrasChutadas = [];
    this.vidas = 6;
    this.estado = "aguardando chute";
  }

  getLetrasChutadas() {
    return this.letrasChutadas;
  }
  getPalavraSecreta() {
    return this.palavraSecreta;
  }

  getPalavra() {
    return this.palavra;
  }

  getVidas() {
    return this.vidas;
  }

  setVidas() {
    return this.vidas -= 1;
  }

  getEstado() {
    return this.estado;
  }

  setEstado(estado) {
    return this.estado = estado;
  }

  ehLetra(letra) {
    return letra.length == 1;
  }

  ehNumero(letra) {
    return !isNaN(letra);
  }

  ehCaracterEspecial(letra) {
    let regex = /\W|_/;
    return regex.test(letra);
  }
  estaPresente(letra) {
    return this.letrasChutadas.includes(letra);
  }

  chutar(letra) {
    let letraChutada = this.getLetrasChutadas();
    let palavraSecreta = this.getPalavraSecreta();
    let palavra = this.getPalavra();
    let vida = this.getVidas();

    if (this.ehLetra(letra) && !this.estaPresente(letra) && !this.ehNumero(letra) && !this.ehCaracterEspecial(letra)) {
      letraChutada.push(letra);

      if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
          if (palavraSecreta[i] == letra) {
            palavra[i] = letra;
          }
        }

        if (!palavra.includes('_')) {
          this.setEstado("ganhou");
        }
      } else {
        this.setVidas();
        vida = this.getVidas();
        if (vida == 0) {
          this.setEstado("perdeu");
        }
      }
    }
  }

  buscarEstado() {
    return this.getEstado();
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.getLetrasChutadas(),
      vidas: this.getVidas(),
      palavra: this.getPalavra()
    }
  }
}

module.exports = Forca;
