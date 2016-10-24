class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    let negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ',')),
      this._inputQtd.value,
      this._inputValor.value
    );
  }
}
