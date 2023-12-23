import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UseMovieQuery() {
    return useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
          try {
            const response = await axios.get('/db.json');
            const data = await response.data;
            return data.movies;
          } catch (error) {
            console.error('Error fetching movies:', error);
            throw new Error('Error fetching movies');
          }
        }
      });
}

export default UseMovieQuery;