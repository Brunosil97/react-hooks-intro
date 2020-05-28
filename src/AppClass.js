import React, {Component} from 'react';


class App extends Component {

  state = {
    count: 0,
    isOn: false 
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count +  1
    })
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }
  render(){

    const {count, isOn} = this.state
    return (
       <React.Fragment>
            <h2>Counter</h2>
            <button onClick={this.incrementCount}> I was clicked {count} times</button>
            <h2>Toggle Light</h2>
            <div style={{height: "50px", width: "50px", background: isOn ? "yellow" : "grey"}}
            onClick={this.toggleLight}>

            </div>
        </React.Fragment>
    );
  }
}

export default App;
