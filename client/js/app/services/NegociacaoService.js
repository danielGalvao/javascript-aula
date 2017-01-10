class NegociacaoService {
  obterNegociacoesSemana() {

    return new Promise((resolve, reject) => {
      let xhr =  new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/semana');
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
          } else {
            console.log(xhr.responseText);
            reject('Não foi possível importar negociações.');
          }
        }
      };
      xhr.send();
    });

  }

  obterNegociacoesSemanaAnterior() {

    return new Promise((resolve, reject) => {
      let xhr =  new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/anterior');
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
          } else {
            console.log(xhr.responseText);
            reject('Não foi possível importar negociações da semana anterior.');
          }
        }
      };
      xhr.send();
    });

  }

    obterNegociacoesSemanaRetrasada() {

      return new Promise((resolve, reject) => {
        let xhr =  new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/retrasada');
        xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {
            if(xhr.status == 200) {
              resolve(JSON.parse(xhr.responseText)
                .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
            } else {
              console.log(xhr.responseText);
              reject('Não foi possível importar negociações da semana retrasada.');
            }
          }
        };
        xhr.send();
      });

    }
}
