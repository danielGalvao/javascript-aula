class Negociacao {

  constructor(data, quantidade, valor){
    this.quantidade = quantidade;
    this.data = data;
    this.valor = valor;
  }

  obterVolume() {
    return this.quantidade * this.valor;
  }
}
