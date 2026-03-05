import React from 'react'
import MovieCard from '../comps/MovieCard'
import { useMovieStore } from '../store/store.js'

export default function Home() {
    const act = useMovieStore((state)=>state.fetchMovies())

    const movies = useMovieStore((state) => state.movies)
    console.log(movies);

    return (
        <div>
            {act}
            {movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </div>
    )
}
