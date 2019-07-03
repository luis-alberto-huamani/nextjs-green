import React, { Component } from 'react';
import Button from '../components/buttons/button';
import Input from '../components/form/input';
import InputDate from '../components/form/date';

class Foo extends Component{
  constructor(props){
    super(props);
    this.state = {
      mail: '',
      pop: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onFocus(e) {
    this.setState({ pop: false });
  }

  handlePop() {
    this.setState({ pop: !this.state.pop });
  }

  render() {
    return(
      <div style={{
        paddingTop: '1rem',
        textAlign: 'center',
      }}>
      <p style={{ height: '1rem' }}>{this.state.mail}</p>
        <form
          style={{
            border: '2px solid gold',
            //background: '#669f09',
            height: '70vh',
            width: '50%',
            margin: '0 auto',
            padding: '1rem',
          }}
        >
          <Input
            color='dark'
            id="mail"
            type="text"
            value={this.state.mail}
            onChange={this.onChange}
            onFocus={this.onFocus}
            popText="Su email ya existe"
            pop={this.state.pop}
            label="Correo"
          />
          <InputDate 
            
          />
          <Button onClick={this.handlePop} type="button" color="dark">Foo</Button>
        </form>
      </div>
    );
  }
};

export default Foo;
