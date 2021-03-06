import React,{useContext} from "react"
import '../App.css'
import {Link , useHistory} from 'react-router-dom'
import { UserContext } from "../App"

const NavBar = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const RenderList = () => {
        if(state) {
            return [
                
                <li key="1"><Link to="/profile">Profile</Link></li>,
                <li key="2"><Link to="/createPost">Create Post</Link></li>,
                <li key="6"><Link to="/myfollowingpost">My Following Posts</Link></li>,
                <li key="5">
                    <button className="btn waves-effect waves-light" onClick={() => {
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push("/signin")
                    }}>LOGOUT</button>
    
                </li>
            ]
        }else {
            return [
                <li key="3"><Link to="/signin">Signin</Link></li>,
                <li key="4"><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper white" style={{color:"black"}}>
                    <Link to={state?"/":"/signin"} className="brand-logo left">İnstagram</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {RenderList()}
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar