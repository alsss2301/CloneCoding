import React, { useState, useEffect } from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaparica.com/v1/tickers")
        .then((response) => response.json()) // 코인 받아오기
        .then((json) => {
            setCoins(json); // 코인데이터를 state에 넣기
            setLoading(false); //코인얻기가 끝나면 false로 바꿔서 로딩중 없애기
        });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
            <select>
                {coins.map((coin) => (
                  <option>
                    {coin.name} ({coin.symbol}): {coin.quotes.USD.price} 
                  </option>
                ))}
            </select>
            )}
        </div> // coin은 coins 배열안에 들어 있는 coin들(객체)
    );
}

export default CoinTracker;