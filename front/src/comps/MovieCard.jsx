import React from 'react'

export default function MovieCard(movie) {
    return (
        <Link>
            <div className='movie'>
                <div className='image'>
                    <img src={ movie.images[0] } alt={ movie.Title } />
                </div>

                <div className='movie-name'>
                    { movie.Title }
                </div>

                <div className='movie-year'>
                    <p className='p1'>Year</p>
                    <p className='p2'>{ movie.Year }</p>
                </div>

                <div className="runtime">
                    <p className='p1'>Runtime</p>
                    <p className='p2'>{ movie.Runtime }</p>
                </div>

                <din className="genre">
                    <p className='p1'>Genre</p>
                    <p className='p2'>{ movie.Genre }</p>
                </din>

                <div className="language">
                    <p className='p1'>Language</p>
                    <p className='p2'>{ movie.Language }</p>
                </div>

                <div>
                    <button className='movie-button'>Select Seats</button>
                </div>
            </div>
        </Link>
    )
}