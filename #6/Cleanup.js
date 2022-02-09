import React, {useState, useEffect} from 'react';

function Hello() {
    useEffect(() => {
        console.log("created :)");
        return () => console.log("destroyed :("); //컴포넌트가 파괴될때도 함수를 실행되게 하고 싶다면,, cleanup함수
    }, []);
    return <h1>Hello</h1>;
} // 컴포넌트는 jsx를 부르는 함수일뿐.
// () => { console.log("created"); }는
// const hi = () => { console.log("created") };와
// function hi() { console.log("created"); } 와 같다.

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return 
    <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    ;
}

export default Cleanup;