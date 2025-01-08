/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
    // let post = '강남 우동 맛집';

    // // destructuring 문법
    // let [글제목1, a] = useState('남자 코트 추천');
    // // state는 값이 변경되면 자동으로 재랜더링이 됨

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);

    let [입력값, 입력값변경] = useState('');

    // function 함수() {
    //     따봉변경(따봉++);
    // }

    function 함수(i) {
        let copy = [...따봉];
        copy[i] = copy[i] + 1;
        따봉변경(copy);
    }

    // array뒤엔 map 사용가능
    // map은 callback 함수를 가져올 수 있음
    [1, 2, 3].map(function (a) {
        // console.log(a);
        // return은 해당 자료형을 array에 담아줌
        // return '123321'
    });

    // map 정리
    // 1. array 자료 갯수만큼 함수안의 코드 실행해줌
    // 2. 함수의 파라미터는 array안에 있던 자자료임
    // 3. return에 뭐 적으면 array로 담아줌

    return (
        <div className='App'>
            <div className='black-nav'>
                <h4>ReactBlog</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy.sort();
                    글제목변경(copy);
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    // 글제목[0] = '여자코트 추천';

                    // array/object 다룰때
                    // 원본은 보존하는게 좋음
                    let copy = [...글제목];
                    copy[0] = '여자 코트 추천';

                    // state 변경 함수 특징
                    // 기존 state와 신규 state가 같으면 변경 X

                    // array/object 특징
                    // let arr = [1, 2, 3];
                    // 1, 2, 3을 특정 RAM 공간에 저장해두고 arr으로 위치를 찾는 것

                    // 글제목[0] = '여자코트 추천';
                    // 같은 글제목의 위치를 가르키기때문에 변경되지 않음

                    // 그래서 copy를 활용을 하여 다른 위치를 가르켜줘야함
                    // 근데 단순히 copy = 글제목; 을하게 되면 같은 위치를 가리키기때문에

                    // 그렇기에 reference data type을 활용하여
                    // ... => 괄호를 벗겨주세요
                    // [ ] => 괄호를 씌워주세요
                    // 새로운 state구나!

                    글제목변경(copy);
                }}
            >
                ❤️
            </button>
            {/* <div className='list'>
                <h4>
                    {글제목[0]}
                    <span onClick={함수}> 👍 </span> {따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4
                    onClick={() => {
                        // modal state 수정
                        modal == false ? setModal(true) : setModal(false);
                    }}
                >
                    {글제목[2]}
                </h4>
                <p>2월 17일 발행</p>
            </div> */}
            {/* mpa 활용해서 반복하는법 */}
            {/* {[1, 2, 3].map(function () {
                return <div>안녕</div>;
            })}

            {[1, 2, 3].map(function () {
                return (
                    <div className='list'>
                        <h4>{글제목[1]}</h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })} */}
            {/* 
            1. 첫번째 매개변수는 array에 속한 요소
            2. 두번째 매개변수는 반복하는 정수
            */}
            {글제목.map(function (a, i) {
                return (
                    // 반복문으로 html 생성하면 key={html마다 다른 숫자} 추가해야 함
                    <div className='list' key={i}>
                        <h4
                            onClick={() => {
                                // modal state 수정
                                modal == false ? setModal(true) : setModal(false);
                                setTitle(i);
                            }}
                        >
                            {글제목[i]}
                            {/* 상위로 퍼지는 이벤트 버블링을 막고싶으면 e.stopPropagation() */}
                            <span
                                onClick={(e) => {
                                    e.stopPropagation();
                                    함수(i);
                                }}
                            >
                                {' '}
                                👍{' '}
                            </span>{' '}
                            {따봉[i]}{' '}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    let copyTitle = [...글제목];
                                    copyTitle.splice(i, 1);
                                    글제목변경(copyTitle);

                                    let copyLike = [...따봉];
                                    copyLike.splice(i, 1);
                                    따봉변경(copyLike);
                                }}
                            >
                                글 삭제
                            </button>
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}
            <input
                onChange={(e) => {
                    입력값변경(e.target.value);
                    // 여기서 변경은 한타이밍 늦게 변경되는데
                    // 변경함수가 비동기로 작동하기 때문이다.
                    console.log(입력값);
                }}
            />
            {/* onScroll, onInput, onMouseOver 등등 */}
            <button
                onClick={() => {
                    let copyTitle = [...글제목];
                    copyTitle.splice(0, 0, 입력값);
                    글제목변경(copyTitle);

                    let copyLike = [...따봉];
                    copyLike.splice(0, 0, 0);
                    따봉변경(copyLike);
                }}
            >
                글 생성
            </button>
            {/* 
              <div className='modal'>
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
              </div> 
            */}
            {/* [동적인 UI 만드는 step] 
                1. html css로 미리 디자인 완성
                2. UI의 현재 상태를 state로 저장
                3. state에 따라 UI가 어떻게 보일지 작성
             */}
            {modal == true ? <Modal 색깔='green' 글제목={글제목} title={title} /> : null}
            <Modal2></Modal2>
        </div>
    );
}

// component 문법
// 어떤걸 컴포넌트로 만들면 좋은가
// 1. 반복적인 html을 축약할때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

// 단점 : state를 사용함에 불편함

// let Modal = () => { }, 이런식으로 선언 가능
function Modal(props) {
    return (
        // <></> Fregments 문법
        <>
            {/* 부모 -> 자식 state 전송 하는 법 
                1. <자식 컴포넌트 작명 = { state 이름 }>
                {modal == true ? <Modal 작명 = { state 이름 }/> : null}

                2. props 파라미터 등록 후 props.작명 사용

                props는 style 등의 요소도 전달 가능하며
                파라미터 문법이기에,
                다양한 기능을 하는 함수를 만들 때 사용함
            */}

            <div className='modal' style={{ backgroundColor: props.색깔 }}>
                <h4>{props.글제목[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button>글 수정</button>
            </div>
        </>
    );
}

// 클래스 문법으로 컴포넌트 만들려면
// 클래스 문법이란? 변수랑 함수를 많이보관 할 수 있는 통
class Modal2 extends React.Component {
    // 필수 요소 constructor(){}, super(), render(){}
    constructor(props) {
        super(props);
        // state 만들려면?
        this.state = {
            name: 'kim',
            age: 20,
        };
    }
    render() {
        return (
            <div>
                {/* state 대신 props를 활용할 수 있음 */}
                안녕 {this.state.age}
                <button
                    onClick={() => {
                        this.setState({ age: 21 });
                    }}
                >
                    버튼
                </button>
            </div>
        );
    }
}

export default App;
