// separate component for displaying each movie
function Movie({ title, year, synopsis, xyz }) {
    return (
        <li>
            <h3>{title}</h3> <span>({year})</span> <span>*{xyz}*)</span>
            <div>{synopsis}</div>
        </li>
    )
}

function MoviesList() {
    // collection of objects representing movies
    // now modified to include unique IDs
    const movies = [
        {
            id: 1, // items in data collections need unique IDs
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: 2, // unique ID
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: 3, // unique ID
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];

    let index = 0;

    let movieItems = [];
    
    //const movieItems = movies.map(movie => (
    movies.forEach(movie => {
        index++;
        movieItems.push(
                    (
                    <Movie
                        key={index} // key prop is required for lists
                        xyz={index}
                        title={movie.title}
                        year={movie.year}
                        synopsis={movie.synopsis} />
                    // can also destructure movie into individual props
                    // <Movie key={movie.id} {...movie}/>
                    )
        );

    });

    return (
        <div className="MoviesList componentBox">
            {movieItems}
        </div>
    )


    /*
    const listOfMoviesJsx = movies.map(movie => (
        <div className="col-3" style={{ border: '1px solid orange;', padding: '10px;', background: 'purple', margin: '10px', color: 'white' }}>{movie.title}</div>
    ));

    const movieItems = movies.map(movie => (
        <li id={movie.id} key={movie.id}>{movie.title}</li>
    ))

    return (
        <div className="MoviesList componentBox">
            <ul>
                {movieItems}
            </ul>

            <ul>
                {movieItems}
            </ul>
        </div>
    )

*/

}
export default MoviesList;