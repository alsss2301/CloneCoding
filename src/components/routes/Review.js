import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // url에 있는 변수id값을 받아옴

function Review() {
    const [review, setReview] = useState(
        () => JSON.parse(window.localStorage.getItem("review"))
    );
    const { id } = useParams();//url의 상세정보를 알려줌.
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        window.localStorage.setItem("review", JSON.stringify(review));
      }, [review]);

    const onChange = (e) => setReview(e.target.value);

    return (
        <div>
        <h1>리뷰</h1>
        <input onChange={onChange} placeholder="리뷰를 입력하세요" value={review}/>
        <h4>{review}</h4>
        </div>
    );
    
}

export default Review;