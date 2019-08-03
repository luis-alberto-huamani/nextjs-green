import React from 'react';

class CountDown extends React.Component{
  constructor(){
    super();
    this.state = {
      countDown: null,
    }
  }

  componentDidMount() {
    const countDownDate = new Date("Aug 15, 2019 16:00:00").getTime();
    this.countDown = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({ countDown: `${days} d ${hours} h ${minutes} m ${seconds} s` })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  render() {
    return(
      <span>{this.state.countDown}</span>
    )
  }
};

export default CountDown;