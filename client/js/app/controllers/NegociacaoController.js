class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();
    let helper = new DateHelper();
    let negociacao = new Negociacao(
      helper.textToDate(this._inputData.value),
      this._inputQtd.value,
      this._inputValor.value
    );
    console.log(negociacao);
    console.log(helper.dateToText(negociacao.Data));
  }
}
