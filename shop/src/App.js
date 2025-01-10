import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 작명 from 'data.js';
// import { a, b } from 'data.js';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailPage from './routes/DetailPage.js';

function App() {
    let [shoes, setShoes] = useState(data);

    // const shoesList = shoes.map((shoe) => (
    //     <div className='col-md-4' key={shoe.id}>
    //         <img src={process.env.PUBLIC_URL + '/shoes' + (shoe.id + 1) + '.jpg'} width='80%' />
    //         <h4>{shoe.title}</h4>
    //         <p>{shoe.content}</p>
    //     </div>
    // ));

    // 페이지 이동 도와주는 useNavigate();
    let navigate = useNavigate();

    return (
        <div className='App'>
            <Navbar bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
                    <Nav className='me-auto'>
                        {/* navigate 활용 */}
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>
                        {/* <Nav.Link href='#features'>Cart</Nav.Link> */}
                        <Nav.Link
                            onClick={() => {
                                navigate('detail');
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 라우터로 페이지 나누는법 */}
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <div className='main-bg'></div>
                            <div className='container'>
                                <div className='row'>
                                    {/* <div className='col-md-4'>
                                            react에서 권장하는 public 폴더 이미지 쓰는 권장 방식
                                            <img src={process.env.PUBLIC_URL + 'shoes1.jpg'} width='80%' />
                                            <h4>{shoes[0].title}</h4>
                                            <p>{shoes[0].content}</p>
                                        </div>
                                        <div className='col-md-4'>
                                            <img src={process.env.PUBLIC_URL + 'shoes2.jpg'} width='80%' />
                                            <h4>{shoes[1].title}</h4>
                                            <p>{shoes[1].content}</p>
                                        </div>
                                        <div className='col-md-4'>
                                            <img src={process.env.PUBLIC_URL + 'shoes3.jpg'} width='80%' />
                                            <h4>{shoes[2].title}</h4>
                                            <p>{shoes[2].content}</p>
                                        </div> */}
                                    {shoes.map((shoe, i) => {
                                        return <ShoesList shoes={shoes[i]} i={i + 1} />;
                                    })}

                                    {/* 페이지 나누는 법 ( 기본 리액트는 SPA )
                                        1. 컴포넌트를 만들어서 상세페이지 내용 채움
                                        2. 누가 /detail 접속하면 그 컴포넌트 보여줌

                                        하지만 복잡하기에 react-router-dom 라이브러를 사용해서 쉽게 만듦
                                        1. terminal -> npm i react-router-dom@6
                                        2. index.js에 BrowserRouter 추가하기
                                    */}
                                </div>
                            </div>
                        </>
                    }
                />
                {/* URL파라미터 적용 */}
                <Route path='/detail/:id' element={<DetailPage shoes={shoes} />} />

                {/* 404페이지 */}
                <Route path='*' element={<div>404</div>} />

                {/* Nested Routes */}
                {/* 기본 방식 
                    <Route path='/about' elemtne={<About />} />
                    <Route path='/about/member' elemtne={<About />} />
                    <Route path='/about/location' elemtne={<About />} /> 
                */}
                <Route path='/about' element={<About />}>
                    <Route path='member' element={<div>멤버임</div>} />
                    <Route path='location' element={<div>위치정보임</div>} />
                </Route>
                {/* 장점 nested route 접속시엔 element 2개 동시에 보임 */}

                {/* homework */}
                <Route path='/event' element={<Event />}>
                    <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
                    <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
                </Route>
            </Routes>

            {/* <Link> 태그를 활용할 수 있음 </Link> */}
        </div>
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>어바웃페이지임</h4>
            {/* /about/member 접속시 <About>&<div>멤버</div> 둘다보임*/}
            <Outlet></Outlet>
        </div>
    );
}

function ShoesList(props) {
    return (
        <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes' + props.i + '.jpg'} width='80%' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    );
}

export default App;
