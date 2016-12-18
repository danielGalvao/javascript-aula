class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._mensagemView.update(this._mensagem);
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
