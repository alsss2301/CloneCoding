import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // url에 있는 변수id값을 받아옴
import styles from './Detail.module.css';

function Detail() {
    const { id } = useParams();//url의 상세정보를 알려줌.
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
        setLoading(false);
    };//movie detail 정보를 api에서 얻어옴. await는 async함수 내부에서만 사용 가능.
    useEffect(()=>{
    getMovie();
    }, []);
    console.log({movie});
    return (
        <div className={styles.back}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} />
                    <h2>{movie.year}</h2>
                    <h3>평점: {movie.rating}<br></br>좋아요 수: {movie.like_count}</h3>
                    <p>{movie.description_intro}</p>
                </div>
            )}
            
        </div>
    
    );
}

export default Detail;