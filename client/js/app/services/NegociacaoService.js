class NegociacaoService {
  obterNegociacoesSemana(cb) {

    let xhr =  new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        cb(null,JSON.parse(xhr.responseText)
          .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
      } else {
        console.log(xhr.responseText);
        cb('Não foi possível importar negociações.');
      }
    };
    xhr.send();
  }

  obterNegociacoesSemanaAnterior(cb) {

    let xhr =  new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/anterior');
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        cb(null,JSON.parse(xhr.responseText)
          .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
      } else {
        console.log(xhr.responseText);
        cb('Não foi possível importar negociações.');
      }
    };
    xhr.send();
  }

    obterNegociacoesSemanaRetrasada(cb) {

      let xhr =  new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/retrasada');
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
          cb(null,JSON.parse(xhr.responseText)
            .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        } else {
          console.log(xhr.responseText);
          cb('Não foi possível importar negociações.');
        }
      };
      xhr.send();
    }
}
