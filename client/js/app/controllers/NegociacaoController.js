class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');

    let _this = this;
    this._listaNegociacoes = new Proxy(new ListaNegociacoes(),{
      get(target, prop, receiver) {
        if(['adiciona','esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
          return function() {
            Reflect.apply(target[prop], target, arguments);
            _this._negociacoesView.update(target);
          }
        }
        return Reflect.get(target, prop, receiver);
      }
    });

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);
  }

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = 'Negociações removidas da tabela';
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
    this._mensagem.texto = 'Negociação adicionada com sucesso';
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
