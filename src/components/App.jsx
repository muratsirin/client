import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavigationBar from "./navbar/Navbar";
import Home from "./homepage/Home";
import {Fab} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import AddPost from "./homepage/AddPost";
import {useDispatch} from "react-redux";
import {showPostModal} from "../redux/modal/modal-action-creators";
import PostPage from "./postpage/PostPage";
import {fetchPosts} from "../redux/post/post-action-creators";

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        async function getPosts(){
            await dispatch(fetchPosts());
        }
        getPosts();
    },[]);

    const fabStyle = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'

    }

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/post/:id' exact element={<PostPage/>}/>
                </Routes>
            </Router>
            <Fab onClick={() => dispatch(showPostModal())} style={fabStyle} className='text-center' color="primary"
                 aria-label="edit">
                <EditIcon/>
            </Fab>
            <AddPost/>
        </div>
    )
}

export default App;