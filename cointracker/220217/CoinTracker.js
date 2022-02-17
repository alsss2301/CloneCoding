import React, { useState, useEffect } from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    const [cost, setCost] = useState("");
    const [select,setSelect] = useState("");
    const [symbol,setSymbol] = useState("coin");

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json()) // 코인 받아오기
        .then((json) => {
            setCoins(json); // 코인데이터를 state에 넣기
            setLoading(false); //코인얻기가 끝나면 false로 바꿔서 로딩중 없애기
        });
    }, []);

    const onSelectChange = (e) => {
        const data = e.target.value.split(",");
        setSelect(data[0]);
        setSymbol(data[1]);
    };
    const inputHandle = (e) => setCost(e.target.value);

    return (
        <div>
            <h1>Coin Tracker! {loading ? "" : `(${coins.length})`}</h1>
            <h2><input onChange={inputHandle} placeholder='금액을 입력하세요.' value={cost}/></h2>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
            <select onChange={onSelectChange}>
                {coins.map((coin, id) => ( 
                  <option key={id} value = "{coin.quotes.USD.price},{coin.symbol}"> 
                    {coin.name}({coin.symbol}) : {coin.quotes.USD.price}
                  </option>
                ))}
            </select>
            )}
            <h3>{(cost / select) > 0 ? (cost / select) : `...`} {symbol}</h3> 
        </div> // coin은 coins 배열안에 들어 있는 coin들(객체)
    );
}

export default CoinTracker;