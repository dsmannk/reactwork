import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import Sub from './Sub';
import { createRef } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import { TitleCss } from './MyCss';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';

// React Hooks 라이브러리를 강의

// 0.React 엔진 - 데이터변경감지에서 UI그려주는!!
// 1.실행방식(index.html) - SPA(싱글페이지)
// 2.JSX 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함.
// (3) if사용 불가능X -> 삼항연산자 (조건 ? 값(true) : 값(false))
// (4) 조건부 렌더링(조건 && 값(true))
// (5) css디자인
//    - 내부에 적는 방법(추천안함)
//    - 외부 파일에 적는 방법
//    - 라이브러리 사용 (부트스트랩, componet-styled)

//let a = 10; // 변수
//const b = 20; // 상수

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

function App() {
  console.log('App 실행됨');

  return (
    <div>
      <ListPage />
    </div>
  );

  // return (
  //   <div>
  //     <Header />
  //     <Route path="/" exact={true} component={HomePage} />
  //     <Route path="/login/:id" exact={true} component={LoginPage} />
  //     <Footer />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Title>안녕</Title>
  //     <TitleCss>헬로우</TitleCss>
  //   </div>
  // );

  // useRef(디자인) start
  // dom을 변경할 때 사용

  // const myRef = useRef(null);
  //
  // const [list, setList] = useState([
  //   { id: 1, name: '길동' },
  //   { id: 2, name: '꺽정' },
  // ]);
  //
  // const myRefs = Array.from({ length: list.length }).map(() => createRef());
  //
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         console.log(myRef);
  //         console.log(myRef.current);
  //         myRefs[0].current.style.backgroundColor = 'red';
  //       }}
  //     >
  //       색변경
  //     </button>
  //     <div ref={myRef}>박스</div>
  //     {list.map((user, index) => (
  //       <h1 ref={myRefs[index]}>{user.name}</h1>
  //     ))}
  //   </div>
  // );

  // useRef(디자인) end

  // useMemo 강의 start

  // useMemo => 메모라이제이션(기억)
  // const [list, setList] = useState([1, 2, 3, 4]);
  // const [str, setStr] = useState('합계');
  //
  // const getAddResult = () => {
  //   let sum = 0;
  //   list.forEach((i) => (sum = sum + i));
  //   console.log('sum 함수 실행됨 : ', sum);
  //   return sum;
  // };
  //
  // const addResult = useMemo(() => getAddResult(), [list]);
  //
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setStr('안녕');
  //       }}
  //     >
  //       문자변경
  //     </button>
  //
  //     <button
  //       onClick={() => {
  //         setList([...list, 10]);
  //       }}
  //     >
  //       리스트값 추가
  //     </button>
  //     <div>
  //       {list.map((i) => (
  //         <h1>{i}</h1>
  //       ))}
  //     </div>
  //     <div>
  //       {str} : {addResult}
  //     </div>
  //   </div>
  // );

  // useMemo 강의 end

  // useEffect 강의 start
  // const [data, setData] = useState(0);
  // const [search, setSearch] = useState(0);
  //
  // const download2 = () => {
  //   // 다운로드 받고 (통신)
  //   let downloadData = 5; // 가정
  //   setData(downloadData);
  // };
  //
  // // 실행시점
  // // (1) App() 그림이 최초 그려질 때
  // // (2) 상태 변수가 변경될때(dependencyList에 등록되어있어야함)
  // // (3) 의존리스트 관리를 할 수 있다.
  // useEffect(() => {
  //   console.log('useEffect 실행됨');
  //   download2();
  // }, [search]); // 두번째 인자에 값을 넣지 않으면 최초 한번만 실행됨
  // // 예 [data]를 입력시 data 변수가 변경될때마나 실행됨.
  //
  // return (
  //   <div>
  //     <div>
  //       <button
  //         onClick={() => {
  //           setSearch(search + 1);
  //         }}
  //       >
  //         검색하기(useEffect)
  //       </button>
  //     </div>
  //     <div>
  //       <h1>useEffect 데이터 : {data}</h1>
  //       <button
  //         onClick={() => {
  //           setData(data + 1);
  //         }}
  //       >
  //         다운로드
  //       </button>
  //     </div>
  //   </div>
  // );

  // useEffect 강의 end

  // useState 강의 start

  // const [num, setNum] = useState(5);
  //
  // let sample = [
  //   { id: 1, name: '홍길동' },
  //   { id: 2, name: '임꺽정' },
  //   { id: 3, name: '장보고' },
  //   { id: 4, name: '코스' },
  // ];
  //
  // const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작!!
  //
  // const download = () => {
  //   // fetch().then().then()
  //   // 기존 데이터 세팅
  //   // const a = sample.concat({ id: 5, name: '러브' });
  //   // console.log(a);
  //   // setUsers(a);
  //
  //   setUsers([...sample, { id: num, name: '러브' }]);
  //   setNum(num + 1);
  // };
  //
  // let list = [1, 2, 3];
  // //let number = 1; // 상태값
  // const [number, setNumber] = useState(2); // React안에 hooks 라이브러리 상태값이 됨.
  //
  // const add = () => {
  //   setNumber(number + 1); // 리엑트한테 number 값 변경할께 라고 요청.
  //   console.log('add', number);
  // };
  //
  // return (
  //   <div>
  //     <div>
  //       <button onClick={download}>다운로드(useStat)</button>
  //       {users.map((u) => (
  //         <h1>
  //           {u.id}, {u.name}
  //         </h1>
  //       ))}
  //     </div>
  //     <div>
  //       <h1>숫자: {number}</h1>
  //       <button onClick={add}>더하기</button>
  //       <Sub />
  //     </div>
  //     <div>
  //       {list.map((n) => (
  //         <h1>{n}</h1>
  //       ))}
  //     </div>
  //   </div>
  // );

  //onclick = 함수()  <= 함수를 넣을 때는 바인딩을 넣으면 실행되므로 제거해야된다
  // useState 강의 end

  // 기본문법 강의 start
  // const mystyle = {
  //   color: 'red',
  // };

  // 랜더링 시점 = 상태값 변경
  // return (
  //   <div>
  //     <div style={mystyle}>
  //       안녕1 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
  //     </div>
  //     <h1 className="box-style">해딩태그 {b === 20 && '20 입니다.'}</h1>
  //     <hr />
  //   </div>
  // );
  // 기본문법 강의 end
}

export default App;
