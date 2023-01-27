import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Registration from './pages/Registration';

function App() {
    const count = useSelector(state => state.countSlice.value);
    const dispatch = useDispatch();

    console.log(count);

    return (
        <div className="App">
            <Registration></Registration>
        </div>
    );
}

export default App;
