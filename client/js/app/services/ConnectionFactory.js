var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe';

class ConnectionFactory {

  constructor() {
    throw new Error('Não foi pssível criar instâncias de ConnectionFactory');
  }

  static getConnection(){
    return new Promisse((resolve, reject) => {

      let openRequest = window.indexedDB.open('aluraframe', 4);

      openRequest.onupgradeneeded = e => {

      };

      openRequest.onsuccess = e => {

      };

      openRequest.onerror = e => {

      };

    })
  }
}
