class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputQtd = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona','esvazia'
    );

    //this._mensagemView = '' ;
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto'
    );

    ConnectionFactory
      .getConnection()
      .then(connection => {
        new NegociacaoDao(connection)
          .listaTodos()
          .then(negociacoes => {
            negociacoes.forEach(negociacao => {
              this._listaNegociacoes.adiciona(negociacao);
            })
          });
      })
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações removidas da tabela';
  }

  adiciona(event) {
    event.preventDefault();

    ConnectionFactory
      .getConnection()
      .then(connection => {
        let negociacao = this._criaNegociacao();
        new NegociacaoDao(connection)
          .adiciona(negociacao)
          .then(() => {
            this._listaNegociacoes.adiciona(negociacao);
            this._limpaFormulario();
          })
      })
      .catch(erro => this._mensagem.texto = erro);
  }

  importaNegociacoes(){
    let service = new NegociacaoService();

    Promise.all([
      service.obterNegociacoesSemana(),
      service.obterNegociacoesSemanaAnterior(),
      service.obterNegociacoesSemanaRetrasada()
    ])
    .then(negociacoes => {
      negociacoes
        .reduce((arrayFlat,array) => arrayFlat.concat(array), [])
        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    })
    .catch(erro => this._mensagem.texto = erro);
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
