import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UseMoviesQuery() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await axios.get('/db.json');
      const data = await response.data;
      return data.movies;
    },
    enabled: true,
  });
}

export default UseMoviesQuery;