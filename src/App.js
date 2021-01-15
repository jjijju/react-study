import React from 'react';

function App() {
    const name = '리액트';
    const style = {
        // 스타일 이름의 -가 사라지고 카멜 표기법으로 작성
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
    };

    return <div style={style}>{name}</div>;

    // 스타일을 미리 선언하지 않고
    // 바로 적용하고 싶으면 div의 style에서 직접 선언
}

export default App;
