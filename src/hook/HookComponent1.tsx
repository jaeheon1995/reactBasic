
// Hook 함수 : 
// - react에서 컴포넌트에 상태와 생명주기에 따라 특정 작업을 수행하도록 하는 특별한 함수
// - use로 시작하는 함수

import { useEffect, useState } from "react";

// hook함수의 종류
// - useState : component의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 상태에 접근
// - useEffect : component의 생명 주기에따라서 특정 작업을 수행할 수 있도록 하는 함수, mount, update,unmount 에 해당하는 생명주기에 따라 실행
// - useRef : 특정한 상태를 기억하기 위한 함수, 값이 변경되더라도 랜더링을 수행하고 싶지 않을 때, DOM요소를 기억하고 싶을 때 사용
// - useContext : component tree 상에서 전역적으로 상태를 공유하고자 할 때 사용하는 함수
// - useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 component 외부로 옮길 수 있게 하여 코드 관리를 수월하게 도와 줌
// - useCallback : 메모리 내 에서 함수를 재사용 할 수 있도록 하는 함수, 랜더링 없이 특정 함수를 시행할 수 있게 함
// - useMemo : 메모리에 내에 계산된 값(함수 결과)을 저장하여 함수 재실행 없이 값을 사용할 수 있도록 하는 함수

// - hook 함수는 반드시 컴포넌트 코드 블럭 라인에 존재해야 함

// const [state2,setState2]= useState<number>(0);

export default function HookComponent1() {
    
    const [state1, setState1] = useState<number>(0);
    const [show,setShow] = useState<boolean>(false);

    // - hook 함수는 반드시 컴포넌트 코드 블럭 라인에 존재해야 함
    // const func = ()=>{
    //     const[state3,setState2]= useState<Number>(0);
    // }

    // useEffect :
    // - conponent 생명주기에 따라서 특정 함수를 호출 하도록 하는 hook함수
    // - mount : component가 처음 화면에 등록
    // - update : component 상태가 변경되어 리랜더링 되었을 때
    // - unmonunt : component가 화면에서 제거될 때
    // - useEffect(호출할 콜백함수, 스코프할 상태 배열);
    // - 개발실행 환경에서는 mount와 unmount가 한번 실행되고 난 후에 다시 mount가 됨

    const onAddClickHandler =()=>{
        setState1(state1 + 1);
    };

    const onShowClickHandler = () =>{
        setShow(!show)
    }

    // mount 시에만 실행
    useEffect(() => {
        // console.log('mount!');
    }, []);

    // 스코프할 상태 배열을 지정하지 않은 경우 모든 상태가 바뀔때 마다 실행됨
    // useEffect(() => {
    //     console.log('두번째 effect');
    //     setState1(state1 +1);
    // });

    // 스코프할 상태 배열에 상태를 지정하면 지정한 상태가 바뀔때 마다 함수가 호출
    useEffect(()=>{
        // setState1(state1+1);
        // 스코프할 상태 배열에 지정한 상태를 해당 effect에서 변경하면 무한 호출 됨
        // console.log('state1상태 변경');
    },[state1]);


    //스코프할 상태 배열에 두개 이상의 상태를 지정할 수 있음
    //배열에 포함된 상태준 하나라도 변경되면 effect가 발생
    useEffect(()=>{
        // console.log('state1 혹은 show가 변경됨')
    },[state1,show]);

    return (
        <div>{state1}
        <button onClick={onAddClickHandler}>+</button>
        <button onClick={onShowClickHandler}>show</button>
        {show && <SubComponent/>}
        </div>
    )

}
function SubComponent(){
    // 전달한 콜백 함수의 return으로 컴포넌트가 unmount될 때 실행할 함수를 반환
    // 상태 스코프와 연결하여 사용할 필요가 없음
    useEffect(()=>{
        console.log('sub component mount!');
        return ()=>{
            console.log('sub component unmount!');
        };
    },[]);

    return(
        <h1>sub</h1>
    )

};

