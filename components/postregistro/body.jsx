import React, { Component } from 'react';
import './body.scss';
import StepsPost from './steps';
import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Button from '../buttons/button';
import Spinner from '../spinner/spinner';
import Greetings from './greeting';

class BodyPost extends Component{
  constructor(props){
    super(props);
    this.state= {
      index: 1,
      step1: true,
      step1Out: false,
      perfilPic: null,
      name: '',
      lastName: '',
      history: '',
      birthday: '',
      interest: '',
      step2: false,
      step2Out: false,
      frontPic: null,
      frontQuote: '',
      step3: false,
      spinner: false,
      greetings: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFile(e) {
    const element = e.target.id;
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ [element]: reader.result });
    }
    if(img) {
      reader.readAsDataURL(img);
    } else {
      this.setState({ [e.target.id]: null });
    }
  }

  onNext() {
    const { index } = this.state;
    if(index >= 3) {
      this.setState({ index: 2 })
    } else {
      this.setState({ index: index + 1 })
    }
    if(index === 1) {
      this.setState({ step1Out: true });
      setTimeout(()=>{
        this.setState({ step1: false, step2: true });
      },300)
    }
    if(index === 2) {
      this.setState({ step2Out: true });
      setTimeout(()=>{
        this.setState({ step2: false, step3: true });
      },300)
    }
  }

  onCancel() {
    this.setState({
      step1: true,
      step1Out: false,
      perfilPic: null,
      name: '',
      lastName: '',
      history: '',
      birthday: '',
      interest: '',
      step2Out: false,
      frontPic: null,
      frontQuote: '',
      step3: false,
    })
  }

  onSubmit() {
    const {
      perfilPic,
      name,
      lastName,
      history,
      birthday,
      interest,
      frontPic,
      frontQuote,
    } = this.state;
    const data = {
      perfilImg: perfilPic,
      name,
      lastName,
      history,
      birthday,
      interest,
      frontPageImg: frontPic,
      frontPageQuote: frontQuote,
    };
    this.setState({ step3: false, spinner: true });
    setTimeout(()=>{
      this.setState({ spinner: false, greetings: true });
    },2000)
  };


  render() {
    const {
      index,
      greetings,
      step1,
      step1Out,
      perfilPic,
      name,
      lastName,
      history,
      birthday,
      interest,
      step2,
      step2Out,
      frontPic,
      frontQuote,
      step3,
      spinner,
    } = this.state;
    const valuesStep1 = {
      perfilPic,
      name,
      lastName,
      history,
      birthday,
      interest,
    }
    const valuesStep2 = {
      frontPic,
      frontQuote,
    };
    const user = {
      perfilImg: perfilPic,
      name,
      lastName,
      history,
      birthday,
      interest,
      frontPageImg: frontPic,
      frontPageQuote: frontQuote,
    };
    return(
      <section className="postregistro_body_cont">
        <div className="container-fluid">
          {
            greetings && <Greetings />
          }
          {
            !spinner && !greetings && <StepsPost index={index} />
          }
          {
            step1 && (
              <Step1
                out={step1Out}
                onChange={this.handleChange}
                onNext={this.onNext}
                onFile={this.handleFile}
                values= {valuesStep1}
                onNext={this.onNext}
            />
          )
          }
          {
            step2 && (
              <Step2
                out={step2Out}
                onChange={this.handleChange}
                onFile={this.handleFile}
                values={valuesStep2}
              />
            )
          }
          {
            step3 && (
              <Step3
                user={user}
              />
            )
          }
        </div>
          {
            spinner && <div style={{marginTop:"20vh"}}><Spinner /></div>
          }
          {
            !spinner && !greetings && (
              <div className="footer">
              {
                step3 
                ?(
                  <>
                    <Button onClick={this.onCancel} color="dark" size="md">Cancelar</Button>
                    <Button onClick={this.onSubmit} color="dark" size="md">Confirmar</Button>
                  </>
                )
                :<Button onClick={this.onNext} color="dark" size="md">Siguiente</Button>
              }
            </div>
            )
          }
      </section>
    );
  }
}

export default BodyPost;
