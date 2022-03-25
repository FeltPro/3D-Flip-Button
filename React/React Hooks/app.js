{/* class Example extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick() {
    this.setState({
        count: this.state.count + 1
      });
    }
  render() {
    const {count} = this.state
    return (
      <div>
      <p>You clicked {count} times </p>
      <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}
ReactDOM.render(<Example/>, document.getElementById("root"));

*/}

function Example() {
    return (
      <div className="row">
        <div className="col"></div>
            <div className="counter col"><Counter /></div>
        <div className="col"></div>
        </div>
    )
}

function Counter() {

  const [count, setCount] = React.useState(0);


  return (
    <div >
      <p>You clicked {count} times!</p>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      <button onClick={()=> setCount(count * 0)}>Reset</button>
    </div>
  )
}

ReactDOM.render(<Example/>, document.getElementById("root"));
