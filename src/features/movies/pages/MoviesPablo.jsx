import React from 'react'
import useFetch from '../../../common/hooks/useFetch';
import { getPopularMovies } from '../services/getPopular';


const Movies = () => {
    
    const {
        data: movies1,
        error: error1,
        isLoading: isLoading1,
      } = useFetch(getPopularMovies);
 
      
 
  return (
    <div>movies</div>
  )
}

export default Movies
