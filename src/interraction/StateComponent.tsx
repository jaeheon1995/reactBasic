import { ChangeEvent, useState } from 'react';

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
    const [total,setTotal]=useState<number>(0);
    //let counts:number[]=[];
    const [counts, setCounts]=useState<number[]>([0]);
    const [comment,setComment]=useState<string>('');

    let comm = '';
    const onChangeHandler= (event:ChangeEvent<HTMLInputElement>) =>{
        comm=event.target.value;
        console.log(comm);
        setComment(event.target.value);
    };

    const onIncrease=()=>{
        // setCount(count + 1);
        
        //상태변수는 반드시 상태변경함수를 통해서 변경해야 리렌더링 됨
        // count++;
        // console.log(count);
        // 상태 변경함수를 사용하여 상태를 변경한다고 바로 변경되지 않는다. 함수가 끝나고 렌더링된 시점에 변수가 적용

        // setCount(count+1);
        // setCount(count+1);
        //상태변수경함수에 콜백함수를 전달하면 해당콜백함수는 누적되어 실행됨
        // setCount(count => count +1);
        // setCount(count => count +2);        
        // setCount(count => count +3);        
        
        // 상태 변경하는 작업이 한번에 여러번 실행된다면 임시변수를 활용 사용
        // let tmp = 0;
        // tmp = count;
        // tmp += 1;
        // tmp += 2;
        // tmp += 3;
        // setCount(tmp);

        //아래 코드는 setTotal에서 기존의 count값을 사용하기 때문에 동작이 한단계 전단계로 동작
        //임시 변수를 사용하여 변경결과값을 미리 저장하고 사용하면 위의 문제를 해결 가능
        // setCount(count+1);
        // setTotal(total+count);

        const newCount = count + 1;
        setCount(newCount);
        setTotal(total+newCount);

        // 아래 코드는 배열에 요소를 추가했지만 실제 배열주소가 바뀌지 않았기 때문에 변경을 인식하지 못함
        // counts.push(newCount);
        // console.log(counts);
        // setCounts(counts);

        //타입이 배열혹은 객체 형태인 상태는 반드시 새로운 배열혹은 객체를 생성 변경 해야 인식
        const newCounts = [...counts, newCount];
        setCounts(newCounts);
    };
    return (
        <div>
            <h1>{comm}</h1>
            <h1>{comment}</h1>
            {/* 만약 input으로 상태를 지정한다면 value로 그 상대를 지정해야 불일치가 발생하지 않는다 */}
            <input value={comment} onChange={onChangeHandler}/>
            <h1>{count}</h1>
            <h1>total:{total}</h1>
            <h1>counts length:{counts.length}{counts}</h1>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}
