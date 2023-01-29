import './App.css';
import PostsList from './pages/PostsList';
import AddPostForm from './pages/AddPostForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './store/reducers/usersReducer';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="App">
            <AddPostForm />
            <PostsList />
        </div>
    );
}

export default App;
