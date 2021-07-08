import React, { useState, useEffect } from 'react';
import ChatAPI from './chatApi';
import Context from './context/context'
// import ReactDOM from 'react-dom';
// ChatAPI: ChatAPI;
const initialState = { count: 0 };
const useReducer = (reducer: any, initialState: any) => {
    const [state, setState] = useState(initialState);

    function dispatch(action: any) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
const Dome = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const [isOnline, setOnline] = useState(false)
    useEffect(
        () => {
            function handleStatusChange(status: any) {
                setOnline(status.isOnline);
            }
        }
    )
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <p>Hook 简介</p>
                <h5>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性</h5>
                <div>
                    Count: {state.count}
                    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                </div>
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                </button>
                </div>
                <div>
                    isOnline:{isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'}
                    <button onClick={() =>
                        // ChatAPI.unsubscribeFromFriendStatus('1', setOnline)
                        setOnline(true)
                    }>
                        change status
                </button>
                </div>
                <p>
                    useEffect 做了什么？
                </p>
                <span>
                    通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。
                </span>
                <p>
                    为什么在组件内部调用 useEffect？
                </p>
                <span>
                    将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。
                </span>
                <p>
                    useEffect 会在每次渲染后都执行吗？
                </p>
                <span>
                    默认情况下，它在第一次渲染之后和每次更新之后都会执行。
                </span>
            </div>
            <Context />
        </>
    )
}
export default Dome;