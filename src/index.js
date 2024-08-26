import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Link, NavLink, Route, Routes} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    );
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    );
}
function App() {
    return (
        <div>
            <h1>Hello React Router DOM</h1>
            <ul>
                {/*NavLink : 개발자 도구 -> class="active" 생김*/}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/topics" element={<Topics />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/*" element={'Not Found'}/>
            </Routes>
        </div>
    );
}

/**
 * 웹 서버 설정에 따라 어떤 패스로 들어오든 루트 페이지에 있는 HTML 파일을 서비스 할 수 있다면 BrowserRouter,
 * 그렇지 않다면 HashRouter.
 * HashRouter: 주소창에 `#`붙음. 뒤의 내용은 `북마크`라는 뜻!
 */
ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
