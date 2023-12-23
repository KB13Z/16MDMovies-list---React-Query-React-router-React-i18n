import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieDetails from '../MovieDetails/MovieDetails';
import UseMoviesQuery from './UseMoviesQuery';
import styles from './Movies.module.css';

function Movies() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const movieQuery = UseMoviesQuery();
    const movies = movieQuery.data;

    useEffect(() => {
        if (!movies && !movieQuery.isLoading) {
            navigate('/404', { replace: false });
        }
    }, [movies, movieQuery.isLoading, navigate]);

    return (
        <div className={styles.moviesContainer}> 
            <h2 className={styles.moviesHeading}>List of movies</h2>
            {id ? (
                <MovieDetails movies={movies} />
            ) : (
                <MovieCard />
            )}
        </div>
    )
}

export default Movies;