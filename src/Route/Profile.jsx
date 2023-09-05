import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"



const Profile = () => {
    const {Logout} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        Logout()
        navigate('/')
    }
    return(
        <div>
            this profile
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Profile