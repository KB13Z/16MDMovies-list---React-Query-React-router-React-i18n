import UseMovieQuery from './UseMovieQuery';
import UseDeleteMovieMutation from './UseDeleteMovieMutation';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

interface Movie {
    id: number;
    title: string;
    genre: string;
    year: number;
    director: string;
    rating: number;
    commentaries: string[];
}

function MovieCard() {
  const { data, isLoading, isError } = UseMovieQuery();
  
  const deleteMovie = UseDeleteMovieMutation();

  if( isLoading ) return ( <h1>Loading....</h1>)

  if( isError ) return (<h1>Error loading data</h1>)

  return (
    <div className={styles.movieCardContainer}>
      {data.map((movie: Movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <h3 className={styles.movieTitle}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </h3>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <button
            type='button'
            className={styles.deleteButton}
            onClick={() => deleteMovie.mutate(movie.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;