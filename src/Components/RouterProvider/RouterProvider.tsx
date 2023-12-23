import { Routes, Route } from 'react-router-dom';
import Project from "../Project/Project";
import Author from '../Author/Author';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import UseMoviesQuery from '../Movies/UseMoviesQuery';
import NotFound from '../NotFound/NotFound';

function RouterProvider() {
    const movieQuery = UseMoviesQuery();

    return (
        <Routes>
            <Route path='/' element={<Project />} />
            <Route path='/author' element={<Author />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:id' element={<MovieDetails movies={movieQuery.data} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterProvider;
