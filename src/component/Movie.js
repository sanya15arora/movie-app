import React, {useState, useEffect} from 'react';
import MovieList from './MovieList';
import "./MovieStyle.css"
import Search from './Search';
import AddFavourite from './AddFavourite';
import RemoveFavourite from './RemoveFavourite';

const Movie = () => {

    const [searchKeyword, setSearchKeyword] = useState("Star");
    const [movieList, setMovieList] = useState([])
    const [favourites, setFavourites] = useState([])

    const getMovieInfoList = async (searchKeyword) => {

        try {

            let url = `https://www.omdbapi.com/?s=${searchKeyword}&apikey=b85718c9`
            let res = await fetch(url)
            let data = await res.json()
            let tempArray = data.Search

            if (data.Search) {
                setMovieList(tempArray)
            }
        } catch (error) {
        }

    }

    useEffect(
        () => {
            getMovieInfoList(searchKeyword)
        }, [searchKeyword])

    useEffect(
        () => {
            const movieFavourites = JSON.parse(
                localStorage.getItem('movie-app-favourites')
            )

            if (movieFavourites != null) {
                setFavourites(movieFavourites)
            }
        }, []
    )


    const saveToLocalStorage = (items) => {
        localStorage.setItem('movie-app-favourites', JSON.stringify(items))

    }


    const addFavouriteMovie = (movie) => {

        let newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        )
        newFavouriteList = [...newFavouriteList, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)

    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        )
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }


    return (
        <>
            <Search searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
            <MovieList heading="Movies" movieList={movieList} favouriteComponent={AddFavourite}
                       handleFavouritesClick={addFavouriteMovie}/>
            <MovieList heading="My Favourites" movieList={favourites} favouriteComponent={RemoveFavourite}
                       handleFavouritesClick={removeFavouriteMovie}/>
        </>
    )
};

export default Movie;
