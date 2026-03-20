import MovieCard from "../components/MovieCard"
import { useState } from "react"
function Home (){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id : 1, title : "Dhurandar", release_date : "2020"},
        {id : 2, title : "Dhurandar 2", release_date : "2021"},
        {id : 3, title : "Dhurandar 3", release_date : "2022"},
        {id : 4, title : "Dhurandar 4", release_date : "2023"},
        {id : 5, title : "Dhurandar 5", release_date : "2024"},
        {id : 6, title : "Dhurandar 6", release_date : "2025"},
    ]
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("----");
    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="search-input" 
            value ={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className ="search-button"> Submit </button>
                
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home