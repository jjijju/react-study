import React from 'react';
import './App.css';

function App() {
    const name = '리액트';

    return (
        <>
            <div className="react">{name}</div>
            <input></input>
        </>
        // self-closing 태그 <input />
    );
}

export default App;
