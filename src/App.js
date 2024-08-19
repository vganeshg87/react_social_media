import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import Footer from './Footer';
import About from './About';
import Post from './Post';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from "./api/Post"
import useWindowSize from './hooks/useWindowSize';
import { DataProvider } from './context/DataContext';

function App() {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [Search, setSearch] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const {width} = useWindowSize()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');     // this will fetching from server 
        const allpost = [...posts, response.data]     // here we have installed json servver in port 4000
        setPosts(allpost);                            // we are keeping in dbnew.json and considered as server file name dbnew.json
      } catch (err) {
        if (err.response) {
          console.log(err.response.status)
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  } , [])

  function handlenewpostsubmit(e) {
    e.preventDefault(); // To stop refreshing
    console.log(newContent, setNewContent);
    const myid = posts.length ? posts[posts.length - 1].id + 1 : 1
    const arrstruct = { userId: 1, id: myid, title: newTitle, body: newContent }
    const mynewposts = [...posts, arrstruct];
    setPosts(mynewposts);
    setNewContent('');
    setNewTitle('');  // To clear after post 
    navigate("/")

  }
  return (
    <div className="App">
      <DataProvider>
      <Header title="Social Media" width = {width}/>
      <Nav
        Search={Search}
        setSearch={setSearch}
      />
      <hr></hr>
      <hr></hr>
      <Routes>
        <Route path="/" element={
          <Home posts={posts} />} />
        <Route path="post" element={<NewPost
          newContent={newContent}
          setNewContent={setNewContent}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          handlenewpostsubmit={handlenewpostsubmit}
        ></NewPost>} />


        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<Missing></Missing>} />

      </Routes>

      <Footer></Footer>
      </DataProvider>
    </div>
  );
}

export default App;
