
class MovieInfo extends React.Component{
    render() {
        return (
            <div class='content'>
                <h1>Title: {this.props.movie.Title}</h1>
                <h2>Year: {this.props.movie.Year}</h2>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
                <h3>Genre: {this.props.movie.Genre}</h3>
                <h4>Rating: {this.props.movie.imdbRating}</h4>
                <h4>Plot: {this.props.movie.Plot}</h4>
                <h4>Actors: {this.props.movie.Actors}</h4>
               
            </div>
        )
    }
}

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
                .then((json)=>this.setState({
                    movie: json,
                    movieTitle: ''
                }), 
                (err) => console.log(err));
            }
        );
    };
    render() {
        return (
            <div>
                <div class= 'info'>
                <h3>Website built using React, AJAX, and omdbapi.com API to generate movie content.</h3>
                <h3>Enter a name of a movie to see: the year it was made, genre, rating, plot, and actors.</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input
                    id='movieTitle'
                    type='text'
                    value={this.state.movieTitle}
                    onChange={this.handleChange} />
                    <input
                    type='submit'
                    value='Find Movie'
                    />
                </form>
                 {this.state.movie && <MovieInfo movie={this.state.movie} />}
            
            </div>
            
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)