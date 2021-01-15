import React from 'react';
import './App.css';

function App() {
    const name = '리액트';

    return (
        <>
            {/* 주석은 이렇게 작성 */}
            <div
                className="react"
                // 시작 태그를 여러 줄로 작성 시에는 여기에도 주석 작성 가능
            >
                {name}
            </div>
            // 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타남 */
        </>
    );
}

export default App;
