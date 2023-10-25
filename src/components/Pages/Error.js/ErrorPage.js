import React, { Component } from 'react';
import './ErrorPage.css';

class ErrorPage extends Component {
  state = {
    time: 30,
    i: 0,
    selector1: '',
    selector2: '',
    selector3: '',
  };

  randomNum = () => Math.floor(Math.random() * 9) + 1;

  updateSelector = (selector, targetValue, limit, value) => {
    if (this.state.i > limit) {
      clearInterval(selector);
      selector = targetValue; // Set the selector to the targetValue when the limit is reached
    } else {
      selector = this.randomNum();
      this.setState((prevState) => ({ i: prevState.i + 1 }));
    }
    return selector;
  };
  

  componentDidMount() {
    let loop1, loop2, loop3;
    loop3 = setInterval(() => {
      this.setState({ selector3: this.updateSelector(this.state.selector3, 4, 40, loop3) });
    }, this.state.time);
    loop2 = setInterval(() => {
      this.setState({ selector2: this.updateSelector(this.state.selector2, 0, 80, loop2) });
    }, this.state.time);
    loop1 = setInterval(() => {
      this.setState({ selector1: this.updateSelector(this.state.selector1, 4, 100, loop1) });
    }, this.state.time);
  }
  

  render() {
    return (
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit">
                        <span className='dig'>
                            {this.state.selector3}
                        </span>
                    </span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit secondDigit">
                    <span className='dig'>{this.state.selector2}</span>
                    </span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit">
                    <span className='dig'>{this.state.selector1}</span>
                    </span>
                </div>
              </div>
              <div className="msg">
                <span style={{marginLeft:'10%'}}>OH!</span>
               <span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
