class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this.inputQtd = $('#quantidade');
    this.inputData = $('#data');
    this.inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();
    
  }
}
