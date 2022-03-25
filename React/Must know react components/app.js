const App = () => {
return (
        <div>
            <form>
            <input  placeholder="practice" type="text" required></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));