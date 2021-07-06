import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
const Dome = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <p>Hook 简介</p>
                <h5>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性</h5>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
      </button>
            </div>

        </>
    )
}
export default Dome;