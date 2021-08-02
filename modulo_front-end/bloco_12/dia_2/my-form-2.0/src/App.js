import React from 'react';
import './App.css';
import LastJob from './LastJob';
import PersonalInformation from './PersonalInformation';
import ResumeDisplay from './ResumeDisplay';

const initalState = {
  resume: '',
  role: '',
  alert: 0,
  roleDescrip: '',
  fullName: '',
  email: '',
  CPF: '',
  address: '',
  city: '',
  state: '',
  type: '',
  showResume: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initalState
    this.handleChange = this.handleChange.bind(this);
    this.showResume = this.showResume.bind(this);
    this.showResume = this.showResume.bind(this);
    this.hideResume = this.hideResume.bind(this);
  };

  handleChange({ target }) {
    let { name, value } = target;
    this.setState({ [name]: value })
  }

  showResume() {
    this.setState({ showResume: true })
  }
  
  hideResume() {
    this.setState({ showResume: false })
  }

  render(){
    const { showResume } = this.state;
    return (
      <div>
        <h1>Mostre seu currículo</h1>
        <div className="App">        
          <div className="ResumeInfo">
            <PersonalInformation onChange={ this.handleChange} />
            <LastJob onChange= { this.handleChange } />
          </div>
          <div className="ResumeDisplay">
            <div className="SideBySide">
              <button onClick={ this.showResume }>
                Mostrar currículo
              </button>
              <button onClick={ this.hideResume }>
                Limpar currículo
              </button>
            </div>
            { showResume && <ResumeDisplay data={ this.state } />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
