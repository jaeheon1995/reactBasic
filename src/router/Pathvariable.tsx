import { useParams } from 'react-router';

export default function Pathvariable() {

// useParams:
//  - 경로 변수에 해당하는 값을 읽을 때 사용하는 react-router 훅 함수

const {name}= useParams();

    return (
        <div>NAME : {name}</div>
    )
}
