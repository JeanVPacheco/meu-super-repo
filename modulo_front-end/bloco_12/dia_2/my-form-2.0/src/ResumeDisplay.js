import React from 'react'

class ResumeDisplay extends React.Component {

  render() {
    const { data } = this.props;
    const { resume, role, roleDescrip, fullName, email, CPF, address, city, state, type } = data;
  return (
      <div>
        <p>Nome completo: { fullName }</p>
        <p>E-mail: { email }</p>
        <p>CPF: { CPF }</p>
        <p>Endereço:</p>
        <p>Rua e número: { address }, Cidade/UF: { `${ city }/${ state }` }, Tipo: { type } </p>
        <p>Currículo resumido: { resume } </p>
        <p>Cargo: { role }, descrição do cargo: </p>
        <p>{ roleDescrip } </p>
      </div>
    )
  }

}

export default ResumeDisplay