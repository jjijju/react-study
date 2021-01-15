import React from 'react';

function App() {
    const name = undefined;
    return <div>{name || '리액트'}</div>;
}

// jsx 내부에서 undefined를 렌더링하는 것은 ok
// return <div>{name}</div>

export default App;
