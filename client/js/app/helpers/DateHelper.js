class DateHelper {

  constructor() {
    throw new Error('DateHelper não pode ser instanciada');
  }

  static dateToText(data){
    return data.getDate()+'/'+(data.getMonth() + 1)+'/'+data.getFullYear();
  }

  static textToDate(texto){
    return  new Date(...texto.split('-').map((item, indice) => item - indice % 2));
  }
}
