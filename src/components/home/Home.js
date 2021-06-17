import React from 'react';
import {useHistory} from 'react-router-dom'
import './StyleHome.css'

function Home() {

    const history = useHistory();

    return (
        <div className="container">
            <h1 className="home-title">Welcome to <span>iQuad</span> Academy</h1>
            <div className="text-center">
                <button className="btn btn-outline-warning home-btn" onClick={() => {history.push('/student')}}>STUDENT</button>
                <button className="btn btn-outline-warning home-btn" onClick={() => {history.push('/teacher')}}>TEACHERS</button>
            </div>
        </div>
    );
}

export default Home;