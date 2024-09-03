    // axios 패키지 : 
    // - javascript에서 사용하는 Http 클라이언트 라이브러리
    // - nodejs와 브라우저 환경에서 동작
    // - Fetch API, Ajeax 보다 간편함
    // - axios는 기본적으로 비동기 처리를 수행

import axios from "axios";

    // npm install axios
export default function Axios() {

    // axios 객체 
    // - http method에 해당하는 메서드를 포함하고 있음
    // - 각각의 http method 메서드는 매개변수로 url,data,option을 받을수 있음
    // - get,delete : url,option(선택)
    // - post,put,path : url,data(선택),option(선택)
axios
    .get('http://3.34.99.196:4000/api/quantification-model')
    // 각각의 http 메서드는 then으로 response 객체를 받는 콜백 함수를 전달
    .then((response)=>{
        // response객체는 status,header,body(data)를 포함하고있음
        console.log(response.data);
    })
    // http 요청에대한 실패(네트워크에서,400~500상태)처리
    .catch((error)=>{
        // axioserro객체를 받아옴
        // 만약 응답이 존재하는 실패일 경우 axios erro 객체안의 response 속성으로 해당응답에 접근
        console.log(error);
    });

    // option 매개변수
    // -request에 대한 각종 설정을 조작할 때 사용
    axios.get('http://3.34.99.196:4000/api/quantification-model',{
        headers: {Authorization: 'Bearer otsdflsf'},
        params:{'time':'1213'}
    });
    // 주의! request body가 존재하는 요청에 대해서는 매개변수의 위치 주의
    axios.post('http://3.34.99.196:4000/api',{},{
        headers: {Authorization: 'Bearer otsdflsf'},
        params:{'time':'1213'}
    });

    // CORS error
    // Cross Origin Resource Sharing
    // javaScript를 이용한 request요청시 출처가 다른 요청에 대햐여 자원 공유 정책 
    axios.get('https://naver.com');

    return (
        <div></div>
    )
}
