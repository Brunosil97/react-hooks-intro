import React, {Component} from 'react';


class App extends Component {

  state = {
    count: 0,
    isOn: false,
    x: null, 
    y: null
  }

  componentDidMount() {
    document.title = `${this.state.count}`
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentDidUpdate() {
    document.title = `${this.state.count}`
  }

  componentWillMount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
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
            <h2>Mouse Position</h2>
            <p>X position: {this.state.x}</p>
            <p>Y position: {this.state.y}</p>
        </React.Fragment>
    );
  }
}

export default App;
