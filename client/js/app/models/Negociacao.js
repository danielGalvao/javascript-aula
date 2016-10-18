class Negociacao {

  constructor(data, quantidade, valor){
    this._quantidade = quantidade;
    this._data = data;
    this._valor = valor;
    Object.freeze(this);
  }

  get Volume() {
    return this._quantidade * this._valor;
  }

  get Data(){
    return this._data;
  }

  get Quantidade(){
    return this._quantidade;
  }

  get Valor(){
    return this._valor;
  }
}
