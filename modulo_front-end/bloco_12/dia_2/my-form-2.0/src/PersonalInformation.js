import React from 'react';
import './App.css';

class PersonalInformation extends React.Component {
  render(){
    const { onChange } = this.props;
    return (
      <form className="PersonalInfo">
        <p>Nome completo:*</p>
        <input 
          type="Text"
          maxLength="40"
          name="fullName"
          required
          onChange={ onChange }
        />
        <p>E-mail:*</p>
        <input
          type="email"
          maxLength="50"
          name="email"
          required
          onChange={ onChange }
        />
        <p>CPF:</p>
        <input
          type="text"
          maxLength="11"
          name="CPF"
          required
          onChange={ onChange }
        />
        <div className="adress">
          <p>Rua e número:</p>
          <input 
            type="text"
            maxLength="200"
            required
            name="address"
            onChange={ onChange }
          />
          <p>Cidade:</p>
          <input 
            type="text"
            maxLength="28"
            required
            name="city"
            onChange={ onChange }
          />
          <div className="SideBySide">
            <p>Estado:</p>
            <select name="state" onChange={ onChange }>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RR">RR</option>
              <option value="RO">RO</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
          <div className="SideBySide">
          <p>Tipo:</p>
            <label htmlFor="apartamento">
              <input type="radio" name="type" id="apartamento" value="apartamento" onChange={ onChange }/> 
              Apartamento
            </label>
            <label htmlFor="casa">
              <input type="radio" name="type" id="casa" value="casa" onChange={ onChange }/> 
              Casa
            </label>
          </div>
        </div>
      </form>
    )
  }
}

export default PersonalInformation;
