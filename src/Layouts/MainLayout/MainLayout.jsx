import React from "react";
import Card from "../../Components/Card/Card";

class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {headerText: "Header", footerText:"Footer"};
    this.counter = 0;
  }

  changeText () {
    this.setState({headerText: "New header"});
  }

  componentDidMount() {
    this.intervalID = setInterval(()=> {
      this.counter++
      this.setState({headerText: `New header ${this.counter}`});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
        <div className={'layout'}>
          <div className={'header'}>
            {this.state.headerText}
          </div>
          <button onClick={() => {this.changeText()}}>Click me!</button>
          <Card cardName={"render me"}/>
          <div className={'footer'}>
            Fooler
          </div>
        </div>
      )
  }
}

export default MainLayout