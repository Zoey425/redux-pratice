import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
    const count = useSelector(state => state.count);
    let id = useSelector(state => state.id);
    let password = useSelector(state => state.password);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch({ type: 'INCREMENT', payload: { num: 5 } });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const login = () => {
        dispatch({ type: 'LOGIN', payload: { id: 'Zoey', password: 'secret' } });
    };

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={increase}>+5</button>
            <button onClick={decrement}>-1</button>
            <Box />

            <div className="login">
                <h1>
                    {id} / {password}
                </h1>
                <button onClick={login}>login</button>
            </div>
        </div>
    );
}

export default App;
