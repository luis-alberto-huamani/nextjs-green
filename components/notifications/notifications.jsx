import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import './notifications.scss';

class Notifications extends Component{
  constructor(props){
    super(props);
    this.state = {
      heartPop: false,
      giftPop: false,
      friendPop: false,
    }
    this.handlePop = this.handlePop.bind(this);
  }

  handlePop(e) {
    const {
      heartPop,
      giftPop,
      friendPop,
    } = this.state;

    switch(e.target.id) {
      case('heart'):
        console.log(e.target.id);
        this.setState({ heartPop: !heartPop, friendPop: false, giftPop: false });
        break;
      case('gift'):
        console.log(e.target.id);
        this.setState({ heartPop: false, friendPop: false, giftPop: !giftPop });
        break;
      case('friend'):
        console.log(e.target.id);
        this.setState({ heartPop: false, friendPop: !friendPop, giftPop: false });
        break;
    }
  }

  render(){
    const { heartPop, friendPop, giftPop } = this.state;
    const heart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="heart" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>;
    const gift = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="gift" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>;
    const friendReq = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path id="friend" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg> ;
    return(
      <div className="notifications_cont">
        <div className="btn_not_cont">
          <button onClick={this.handlePop}>{heart}</button>
          <span>+3</span>
          <Popover placement="bottom" target="heart" isOpen={heartPop}>
            <PopoverBody>
              <ul style={{
                listStyle: "none",
                margin0: 0,
                padding: 0,
              }}>
                <li>jhon comento tu estado</li>
                <li>sophie le gusta estado</li>
                <li>homer te envio un beso</li>
              </ul>
            </PopoverBody>
          </Popover>
        </div>
        <div className="btn_not_cont">
          <button onClick={this.handlePop}>{gift}</button>
          <span>+3</span>
          <Popover placement="bottom" target="gift" isOpen={giftPop}>
            <PopoverBody>
            <ul style={{
                listStyle: "none",
                margin0: 0,
                padding: 0,
              }}>
                <li>jhon te envio un snickers</li>
                <li>sophie te envio un cramel</li>
                <li>homer te envio una cerveza</li>
              </ul>
            </PopoverBody>
          </Popover>
        </div>
        <div className="btn_not_cont">
          <button onClick={this.handlePop}>{friendReq}</button>
          <span>+3</span>
          <Popover placement="bottom" target="friend" isOpen={friendPop}>
            <PopoverBody>
            <ul style={{
                listStyle: "none",
                margin0: 0,
                padding: 0,
              }}>
                <li>jhony quiere ser tu amigo</li>
                <li>soph quiere ser tu amigo</li>
                <li>bart quiere ser tu amigo</li>
              </ul>
            </PopoverBody>
          </Popover>
        </div>
      </div>
    )
  }
};

export default Notifications;