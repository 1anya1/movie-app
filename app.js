class App extends React.Component {
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
    handleChange = (event) =>{
        this.setState({ [event.target.id]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
            searchURL: this.state.baseURL + this.state.apikey +this.state.query+this.state.movieTitle
            }, 
            () =>{
                fetch(this.state.searchURL)
                .then((response)=>response.json())
                .then((json)=>console.log(json), (err) => console.log(err));
            }
        );
    };
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input
                    id='movieTitle'
                    type='text'
                    value={this.state.movieTitle}
                    onChange={this.handleChange} />
                    <input
                    type='submit'
                    value='Find Movie' />
                </form>
                <a href={this.state.searchURL}>{this.state.searchURL}</a>
            </React.Fragment>
            
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)