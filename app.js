class App extends React.Component {
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

class OMDBQueryForm extends React.Component {
constructor (props) {
    super(props)
    this.state={
        baseURL:'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '6106d4d3',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }
}
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)