import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 작명 from 'data.js';
// import { a, b } from 'data.js';
import data from './data.js';

function App() {
    let [shoes, setShoes] = useState(data);

    // const shoesList = shoes.map((shoe) => (
    //     <div className='col-md-4' key={shoe.id}>
    //         <img src={process.env.PUBLIC_URL + '/shoes' + (shoe.id + 1) + '.jpg'} width='80%' />
    //         <h4>{shoe.title}</h4>
    //         <p>{shoe.content}</p>
    //     </div>
    // ));

    return (
        <div className='App'>
            <Navbar bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#features'>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

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
                </div>
            </div>
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
