import React from 'react';
import './App.css';

class LastJob extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ alert: 0 };
    this.showAlert = this.showAlert.bind(this);
  };

  showAlert() {
    if(this.state.alert < 1) {
    alert('Preencha com cuidado esta informação');
    this.setState({alert: 1})
    }
  }

  render(){
    const { onChange } = this.props;
    return(
      <form>
        <p>Resumo do currículo:</p>
        <textarea 
          name="resume"
          maxLength="1000"
          required
          onChange={ onChange }
        />
        <p>Cargo:</p>
        <textarea 
          name="role"
          maxLength="40"
          required
          onMouseEnter={ this.showAlert }
          onChange={ onChange }
        />
        <p>Descrição do cargo</p>
        <textarea 
          name="roleDescrip"
          maxLength="500"
          required
          onChange={ onChange }
        />
      </form>

    )
  }
}

export default LastJob;
