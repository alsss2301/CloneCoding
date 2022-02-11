import React from 'react';
import PropTypes from 'prop-types';

function Movie( {coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g, key) => (
                    <li key={g}>{g}</li>
                ))}
            </ul> 
        </div>  // 장르 배열 되어있는거를 재배열
    );
Movie.propTypes = {
    converImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

}

export default Movie;