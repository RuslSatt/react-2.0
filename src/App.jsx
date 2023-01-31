import './App.css';
import React from 'react';
import PostsList from './pages/PostsList';
import PostFromPage from './pages/PostFormPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './store/reducers/usersReducer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import EditPostPage from './pages/EditPostPage';

function App() {
    const dispatch = useDispatch();

    let isEffect = React.useRef(false);

    useEffect(() => {
        if (isEffect.current === false) {
            isEffect.current = true;
            dispatch(fetchUsers());
        }
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<PostsList />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/edit/:id" element={<EditPostPage />} />
                <Route path="/post" element={<PostFromPage />} />
            </Routes>
        </div>
    );
}

export default App;
