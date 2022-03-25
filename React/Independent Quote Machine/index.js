// get the API
// create the layout
//add event listeners
//

const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"


class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        quotes: [],
        index: 0
      }
    }

    componentDidMount() {
      fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({quotes: data.quotes}, this.randomIn);
      });
  }

  randomInt() {
    const { quotes } = this.state;
    if( quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length)
      this.setState({
        index
      });
    }
  }


      render() {
        const { quotes, index} = this.state;
        const quote = quotes[index];

        console.log(quote)

        const tweetURL = `https://twitter.com/intent/tweet?
        text=`
        return (
          <div>
          { quote && <p>{quote.quote}</p> }
          { quote && <p>{quote.author}</p> }
            <div>
              <a target="_blank" href={tweetURL}>Tweet</a>
              <button onClick={this.randomInt.bind(this)}> Get Quote</button>
            </div>
          </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'))
