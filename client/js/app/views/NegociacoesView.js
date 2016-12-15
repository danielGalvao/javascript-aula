class NegociacoesView extends View{
  constructor(elemento) {
    super(elemento);
  }
  
  _template(model) {
    return `
    <table class="table table-hover table-borderred">
      <thead>
        <tr>
          <th>DATA:</th>
          <th>QUANTIDADE:</th>
          <th>VALOR:</th>
          <th>VOLUME:</th>
        </tr>
      </thead>
      <tbody>
        ${model.negociacoes.map(n =>
           `
            <tr>
              <td>${DateHelper.dateToText(n.data)}</td>
              <td>${n.quantidade}</td>
              <td>${n.valor}</td>
              <td>${n.volume}</td>
            </tr>
          `
        ).join('')}
      </tbody>

      <tfoot>
        <td colspan="3"></td>
        <td>
          ${model.negociacoes.reduce((total,n) => total + n.volume, 0.0)}
        </td>
      </tfoot>
    </table>
    `;
  }

}
