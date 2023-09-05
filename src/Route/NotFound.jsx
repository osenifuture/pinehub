import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";



const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('./NotFound')
    }, [navigate])

    return(
        <div className="notfound-container">
            <span>
            <i class="fa-solid fa-cat"></i>
            <h1>404</h1>
            </span>
            <h1>This Is Not The Page You Are Looking For </h1>
        </div>
    )
};

export default NotFound;