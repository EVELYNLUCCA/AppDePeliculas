const url=""
// ESTE SE PUEDE ELIMINAR?
export const moviesServices = {
    tryGetPopularMovies: async() => {
        const movies = await fetch(url)
        const moviesJson = await movies.json()
        return moviesJson
    }, 
    tryGetTopRateMovies: async() => {
        const movies = await fetch(url)
        const moviesJson = await movies.json()
        return moviesJson
    }
}