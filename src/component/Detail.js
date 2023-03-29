import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import "./MovieStyle.css"


const Detail = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [movieDetail, setMovieDetail] = useState({})

    const id = searchParams.get("id")

    const getMovieInfo = async () => {

        try {

            let url = `https://www.omdbapi.com/?i=${id}&apikey=b85718c9`
            let res = await fetch(url)
            let data = await res.json()

            setMovieDetail(data)

            console.log(movieDetail)
        } catch (error) {
        }

    }


    useEffect(
        () => {
            getMovieInfo()
        }, [])


    if (id != null)
        return (

            <>
                <div className='flex-container'>

                    <div className='movie-poster'>
                        <img className='movie-poster' src={movieDetail.Poster} alt="movie poster"/>
                    </div>

                    <div className="movie-details">
                        <p className='title'> {movieDetail.Title}</p>
                        <div className='flex-container'>
                            <div className="genre">
                                <p>
                                    <span style={{weight: "500"}}> Genre :  </span>
                                    <span> {movieDetail.Genre}</span>
                                </p>
                            </div>

                            <div className="year">
                                <p>
                                    <span style={{color: "white"}}>Release Year :  </span>
                                    <span>{movieDetail.Year}</span>
                                </p>
                            </div>
                        </div>

                        <div className='plot'>
                            <p>{movieDetail.Plot}</p>
                        </div>

                        <div className='flex-container plot'>

                            <div class="type"> Cast :</div>
                            <div class="list"> {movieDetail.Actors}</div>
                        </div>

                        <div className='flex-container plot'>
                            <div class="type"> Director :</div>
                            <div class="list"> {movieDetail.Director}</div>
                        </div>
                        <div className='flex-container plot'>
                            <div class="type"> Writer :</div>
                            <div class="list"> {movieDetail.Writer}</div>
                        </div>
                    </div>
                </div>
            </>
        )

    else
        return <div> Invalid link</div>
};

export default Detail;

