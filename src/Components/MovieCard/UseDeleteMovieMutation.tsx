import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const UseDeleteMovieMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => axios.delete(`http://localhost:3001/movies/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
    onError: (error: Error) => {
      console.error('Delete movie error:', error);
    },
  });
};

export default UseDeleteMovieMutation;