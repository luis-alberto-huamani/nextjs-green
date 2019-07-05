import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import classnames from 'classnames';
import './form.scss';

const eyeOpen = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z" /></svg>;
const eyeClose = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z" /></svg>;

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      eye: false,
      eyeShow: false,
      type: 'text',
    }
    this.handleEye = this.handleEye.bind(this);
  }

  componentWillMount() {
    const { type } = this.props;
    if(type === 'password') {
      this.setState({ type: 'password', eyeShow: true });
    }

  }

  handleEye() {
    const { eye } = this.state;
    if (!eye) {
      this.setState({ eye: true, type: 'text' });
    } else {
      this.setState({ eye: false, type: 'password' });
    }
  }

  render(){
    const {
      id,
      type,
      value,
      pop,
      popText,
      onBlur,
      onFocus,
      onChange,
      color,
      placeholder,
      label,
      style,
    } = this.props;
    const { eye } = this.state;
    return(
      <div className='input_main_cont'>
        <div
          className={classnames({
          input_cont: true,
          light: color === 'light',
          dark: color === 'dark',
          
        })}
          style={style}
        >
          <label htmlFor={id}>{label}</label>
          <div className="input_eye">
            <input
              id={id}
              value={value}
              name={id}
              type={this.state.type}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={onChange}
              placeholder={placeholder}
            />
            {
              this.state.eyeShow && (       
              <span className="pass">
                {
                  eye ? <button onClick={this.handleEye} type="button">{eyeOpen}</button> : <button onClick={this.handleEye} type="button">{eyeClose}</button>
                }
              </span>
              )
            }
          </div>
          <Popover placement="bottom" target={id} isOpen={pop}>
            <PopoverBody>
              {popText}
            </PopoverBody>
          </Popover>
        </div>
      </div>
    )
  }
}

export default Input;
