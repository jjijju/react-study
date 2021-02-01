# JSX

자바스크립트의 확장 문법이며, XML과 매우 비슷하게 생겼습니다.

## 장점

-   보기 쉽고 익숙하다.
-   활용도가 높다.

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
```

마치 HTML 태그 쓰듯이 작성합니다.

> **ReactDOM.render 란?**
> 컴포넌트를 페이지에 렌더링하는 역할을 합니다.
> react-dom 모듈을 불러와 사용할 수 있습니다.
> **첫번째 파라미터** = 페이지에 렌더링할 내용을 JSX 형태로 작성
> **두번째 파라미터** = 렌더링할 document 내부 요소를 설정

> **React.StrictMode 란?**
> 리액트 공식문서에 따르면 **잠재적인 문제를 알아내기 위한 도구입니다. Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다.** 라고 소개되어 있습니다.
> 잠재적인 문제의 종류로는 다음과 같은 것들이 있습니다.
>
> -   [안전하지 않은 생명주기를 사용하는 컴포넌트 발견](https://ko.reactjs.org/docs/strict-mode.html#identifying-unsafe-lifecycles)
> -   [레거시 문자열 ref 사용에 대한 경고](https://ko.reactjs.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage)
> -   [권장되지 않는 findDOMNode 사용에 대한 경고](https://ko.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)
> -   [예상치 못한 부작용 검사](https://ko.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
> -   [레거시 context API 검사](https://ko.reactjs.org/docs/strict-mode.html#detecting-legacy-context-api)
>
> 개발 모드에만 영향을 끼친다니, 굳이 지우고 사용할 필요는 없을 것 같다.

## 문법

### 1. 감싸인 요소

VirtualDOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문에 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸 주어야 합니다.

```
import React from 'react';

export default function App() {
	return (
		<div>
			<h1>안녕? 리액트야</h1>
			<h2>반가워</h2>
		</div>
	)
};
```

div로 감싸주는 것이 싫다면 리액트 v16 이상부터 도입된 Fragment라는 기능을 사용하변 됩니다.

```
import React, { Fragment } from 'react';

export default function App() {
	return (
		// <></>로 바꾸어 사용할 수 있습니다.
		<Fragment>
			<h1>안녕? 리액트야</h1>
			<h2>반가워</h2>
		</Fragment>
	)
};
```

### 2. 자바스크립트 표현

jsx안에서는 자바스크립트 표현식을 사용할 수 있습니다.

```
import React from 'react';

export default function App() {
	const name = '리액트';
	return (
		<div>
			<h1>{name} 안녕?</h1>
			<h2>잘 작동함?</h2>
		</div>
	);
};
```

### 3. 조건부 연산자

jsx 밖에서 if 문을 사용하여 사전에 값을 설정하거나, 조건부 연산자를 사용하면 됩니다.

```
import React from 'react';

export default function App() {
	const name = '리액트';
	return (
		<div>
			{name === '리액트' ? <h1>{name}입니다.</h1> : <h2>{name}가 아닙니다.</h2>}
		</div>

	);
}
```

### 4. AND 연산자(&&)

```
import React from 'react';

export default function App() {
	const name = '리웩트';
	return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
}

```

### 5. undefined 렌더링 하지 않기

undefined만 반환되면 오류를 발생 시킵니다. OR(||) 연산자를 사용하여 간단하게 오류를 방지할 수 있습니다. <br>
JSX 내부에서 undefined를 렌더링하는 것은 괜찮습니다.

```
import React from 'react';

export default function ex06() {
	const name = undefined;
	return name || '값이 undefined 입니다.';
	/*
	return (
		<div>
			<h1>{name || '리액트'}</h1>
		</div>
	)
	*/
}
```

### 6. 인라인 스타일링

DOM 요소에 스타일을 적용할 때는 문자열 형태가 아닌 객체 형태로 넣어야 합니다. -와 같은 기호를 제거하고 카멜 표기법으로 작성해야 합니다.

```
import React from 'react';

export default function ex07() {
	const name = '리액트';
	const style = {
		backgroundCoor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding: 16,
	};

	return <div style={style}>{name}</div>;
}
```

### 7. class 대신 className

jsx에서는 class가 아닌 className으로 설정합니다.

```
import React from 'react';
import '../App.css';

export default function ex08() {
	const name = '리액트';
	return <div className="react">{name}</div>;
}
```

<br>

> 리액트를 다루는 기술(개정판)을 정독하면서 서술한 내용입니다.
