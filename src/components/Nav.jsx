import SearchBar from './SearchBar.jsx';
import { Link, NavLink } from 'react-router-dom';

export default function Nav({ onSearch}) {
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    return (
        <>
            <Link to="/Home">Home</Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(getRandomInt(826))}>Random</button>
            <Link to="/about">About</Link>
        </>
    )
}