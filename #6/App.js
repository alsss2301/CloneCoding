import React, { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //함수 선언 = 화살표함수
  // const add = (a, b) => { return a + b; };
  // 만약 코드 블록 내부에서 바로 return을 하는 경우에는 다음과 같이 줄여서 쓸 수 있음. 
  // const add = (a, b) => a + b;
  console.log("i run all the time"); //리액트는 state를 변화시킬 때 component를 재실행시킴.., 즉 상태가 변하면 실행된다.
  useEffect(() => {
    console.log("CALL THE API....");
  }, []); 
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword); // search for "keyword"
    } 
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  //useEffect는 코드를 언제 실행 할 지 선택함.
  //useEffectsms react.js가 동작하는 관점에서 말하자면 방어막 같은 것.
  //useEffect가 iRunOnlyOnce함수를 호출함.
  //컴포넌트가 화면에 가장 처음 렌더링 될 때 한번만 실행하고 싶을때에는 deps위치에 빈 배열을 넣는다.
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>

  );
}

export default App;
