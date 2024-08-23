//콤포넌트 상태전달
//부모요소에서 자식요소로 상태를 전달할 수 있음
//문제점 : 자식요소에서 상태를 변경하면 부모컴포넌트가 리랜더링 됨
//부모컴포넌트의 자식 컴포넌트 중 해당 상태를 사용하지 않는 컴포넌트 까지 렌더링됨
// 코드의 복잡성(컴포넌트의 복잡성)이 증가
//해결을 위해 글로벌 상태로 관리하는 방법이 파생
//글로벌 상태 관리기법으로 context,redux,zustand라는 기법이 존재

import { useDeferredValue, useState } from "react";

//자식요소의 속성으로 전달
export default function PowordingComponent() {

    const [count,setCount]= useState<number>(0);
    const onIncrease=()=>{
        // setCount(count+1);
        setCount((count)=>{return count +1});
    };
    return (
        <div>
            <Child1 count={count}/>
            <Child2 />
            <Child3  onIncrease={onIncrease}/>
        </div>
    )
}

interface Child1Props{
    count: number;
}

function Child1 ({ count }:Child1Props) {
    return (
        <div style={{ height: '200px', backgroundColor: 'red' }}>
        <h1>{count}</h1>
        </div>
    )
}

function Child2 () {
    return (    
        <div style={{ height: '200px', backgroundColor: 'green' }}></div>
    )
}
interface Child3Props {
    // count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    onIncrease:()=>void;
}
function Child3 ({/*count,setCount*/onIncrease}:Child3Props) {
    // const onIncrease=()=>{
    //     // setCount(count+1);
    //     setCount((count)=>{return count +1});
    // };
    return (
        <div style={{ height: '200px', backgroundColor: 'blue' }}>
            <button style={{width:'100%', height:'100%'}} onClick={onIncrease}>+</button>
        </div>

    )
}