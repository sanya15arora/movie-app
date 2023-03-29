import React from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom'
import MoviesHeading from './MoviesHeading';
import "./MovieStyle.css"


const MovieList = ({heading, movieList, favouriteComponent, handleFavouritesClick}) => {

    const navigate = useNavigate();

    const createParams = (id) => {
        const params = [
            ['id', id]];

        return params
    }
    const goToDetails = (id) =>
        navigate({
            pathname: '/detail',
            search: `?${createSearchParams(createParams(id))}`,
        });


    const FavouriteComponent = favouriteComponent
    console.log("MovieList", movieList)


    if (movieList.length)
        return (

            <>
                <MoviesHeading heading={heading}/>

                <div class="flex-container">
                    {
                        movieList.map((curEle) => (
                                <div className="main-container" key={curEle.imdbID}>
                                    <img src={curEle.Poster} alt="movieposter" onClick={() => goToDetails(curEle.imdbID)}/>

                                    <div className='overlay' onClick={() => handleFavouritesClick(curEle)}>
                                        <FavouriteComponent/></div>
                                </div>
                            )
                        )
                    }

                </div>

            </>
        )
    else
        return <div></div>

}

export default MovieList;

