import React, { useState } from 'react'

//상태(state):
//컴포넌트가 독립적으로가지고 있는 데이터 저장 공간
//상태가 컴포넌트의 렌더링에 영향을 미침
//상태가 변경되면 컴포넌트가 리렌더링

export default function StateComponent() {

    // state선언 방법
    // useState 훅 함수로 상태를 선언
    // const [상태변수, 상태변경 함수]= useState<상태의 변수 타입>(초기값);
    // let count : number = 0;
    const [count, setCount]=useState<number>(0);
    //let counts:number[]=[];
    const [counts, setCounts]=useState<number[]>([]);
    const onIncrease=()=>{
        setCount(count + 1);
        
        //상태변수는 반드시 상태변경함수를 통해서 변경해야 리렌더링 됨
        // count++;
        // console.log(count);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}
