class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();
    let negociacao = new Negociacao(
      DateHelper.textToDate(this._inputData.value),
      this._inputQtd.value,
      this._inputValor.value
    );

    this._listaNegociacoes.adiciona(negociacao);
    this._limpaFormulario();
  }

  _limpaFormulario() {
    this._inputQtd.value = 1;
    this._inputData.value = '';
    this._inputValor.value = 0.0;
    this._inputQtd.focus();
  }
}
