import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import ViewPost from './components/ViewPost';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <div className='container  '>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<UpdatePost />}></Route>
          <Route path="/view-post/:id" element={<ViewPost />}></Route>
          <Route path="/test/" element={<Test />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
