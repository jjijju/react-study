import React, { Fragment } from 'react';

function App() {
    const name = '리액트';

    return (
        <Fragment>
            <h1>안녕 {name}</h1>
            <h2>정상 작동?</h2>
        </Fragment>
    );
}

// <Fragment></Fragment> 대신 <></> 사용 가능

export default App;
