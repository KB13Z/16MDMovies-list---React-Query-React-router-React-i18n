import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import styles from './MovieDetails.module.css'

interface Movie {
    id: number;
    title: string;
    genre: string;
    year: number;
    director: string;
    rating: number;
    commentaries: string[];
  }

interface MovieDetailProps {
  movies: Movie[];
}

const MovieDetails: React.FC<MovieDetailProps> = ({ movies }) => {
  const { id } = useParams<{ id: string }>();
  const movieId = parseInt(id ?? '', 10);
  const [newCommentary, setNewCommentary] = useState<string>('');
  const [oneMovie, setOneMovie] = useState<Movie | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMovie = localStorage.getItem(`movie_${id}`);

    if (storedMovie) {
      setOneMovie(JSON.parse(storedMovie));
    } else if (!movies) {
      navigate('/404');
      return;
    } else {
      const movie = movies.find((m) => m.id === movieId);

      if (!movie) {
        navigate('/404');
        return;
      }

      localStorage.setItem(`movie_${id}`, JSON.stringify(movie));
      setOneMovie(movie);
    }
  }, [id, movieId, movies, navigate]);

  useEffect(() => {
    const storedCommentaries = localStorage.getItem(`movie_${id}_commentaries`);
    if (storedCommentaries) {
      setOneMovie((prevMovie) => {
        if (prevMovie) {
          return {
            ...prevMovie,
            commentaries: JSON.parse(storedCommentaries),
          };
        }
        return prevMovie;
      });
    }
  }, [id]);

  useEffect(() => {
    if (oneMovie) {
      localStorage.setItem(`movie_${id}`, JSON.stringify(oneMovie));
    }
  }, [id, oneMovie]);

  const commentarySchema = z.string().min(10).max(300);

  const handleAddCommentary = () => {
    try {
      commentarySchema.parse(newCommentary);
    } catch (error) {
      return;
    }

    if (newCommentary.length > 0 && oneMovie) {
      const updatedCommentaries = [...oneMovie.commentaries, newCommentary];

      setOneMovie((prevMovie) => {
        if (prevMovie) {
          const updatedMovie = {
            ...prevMovie,
            commentaries: updatedCommentaries,
          };

          localStorage.setItem(`movie_${id}_commentaries`, JSON.stringify(updatedCommentaries));

          return updatedMovie;
        }
        return prevMovie;
      });

      setNewCommentary('');
    }
  };

  const handleGoBack = () => {
    navigate('/movies');
  };

  if (!oneMovie) {
    return null;
  }

  return (
    <>
      <div className={styles.movieContainer}>
        <div className={styles.movieWrapper}>
        <h2>{oneMovie.title}</h2>
        <p><strong>Genre:</strong> {oneMovie.genre}</p>
        <p><strong>Year:</strong> {oneMovie.year}</p>
        <p><strong>Director:</strong> {oneMovie.director}</p>
        <p><strong>Rating:</strong> {oneMovie.rating}</p>
        <h4>Commentaries:</h4>
        <ul className={styles.commentList}>
            {oneMovie.commentaries.map((comment, index) => (
            <li key={index}>{comment}</li>
            ))}
        </ul>
        <div className={styles.addCommentContainer}>
          <label className={styles.addCommentWrapper}>
            <strong>Add commentary:</strong>
            <textarea
              value={newCommentary}
              onChange={(e) => setNewCommentary(e.target.value)}
              className={styles.textarea}
            />
          </label>
          <button className={styles.addCommentButton} onClick={handleAddCommentary}>Add</button>
        </div>
        </div>
      </div>
      <button className={styles.goBackButton} onClick={handleGoBack}>
        Go back
      </button>
    </>
    
  );
};

export default MovieDetails;

