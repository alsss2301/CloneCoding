import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'; // url에 있는 변수id값을 받아옴

function Detail() {
    const { id } = useParams();//url의 상세정보를 알려줌.
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
    };//movie detail 정보를 api에서 얻어옴. await는 async함수 내부에서만 사용 가능.
    useEffect(()=>{
    getMovie();
    }, []);
    return <h1>Detail</h1>;
}

export default Detail;