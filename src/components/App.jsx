import React from "react";
import NavigationBar from "./navbar/Navbar";
import Home from "./homepage/Home";
import {Fab} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import AddPost from "./homepage/AddPost";
import {useDispatch} from "react-redux";
import {showPostModal} from "../redux/modal/modal-action-creators";

function App(){
    const dispatch = useDispatch();

    const fabStyle = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'

    }

    const handleShowPostModal = () => dispatch(showPostModal());

    return(
        <div>
            <NavigationBar/>
            <Home/>
            <Fab onClick={handleShowPostModal} style={fabStyle} className='text-center' color="primary" aria-label="edit">
                <EditIcon/>
            </Fab>
            <AddPost/>
        </div>
    )
}
export default App;