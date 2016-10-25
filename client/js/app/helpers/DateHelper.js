class DateHelper {

  dateToText(data){
    return data.getDate()+'/'+(data.getMonth() + 1)+'/'+data.getFullYear();
  }

  textToDate(texto){
    return  new Date(...texto.split('-').map((item, indice) => item - indice % 2));
  }
}
