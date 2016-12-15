class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._negociacoesView.update(this._listaNegociacoes);
  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textToDate(this._inputData.value),
      this._inputQtd.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputQtd.value = 1;
    this._inputData.value = '';
    this._inputValor.value = 0.0;
    this._inputQtd.focus();
  }
}
