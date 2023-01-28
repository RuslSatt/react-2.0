import './App.css';
import PostsList from './pages/PostsList';
import AddPostForm from './pages/AddPostForm';

function App() {
    return (
        <div className="App">
            <AddPostForm></AddPostForm>
            <PostsList></PostsList>
        </div>
    );
}

export default App;
