import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";



const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('./NotFound')
    }, [navigate])

    return(
        <div>
            <h2>ooop an error occoured page not found</h2>
        </div>
    )
};

export default NotFound;