import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const defaultForm = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    number: "",
    confirmPassword : ""
}

const SignUp = () => {
    const [formField, setForm] = useState(defaultForm);
    const {fullname, email, username,number, password, confirmPassword } = formField;
    const navigate = useNavigate()
    const {Login, Logout} = useContext(AuthContext)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)

    const resetForm = () => {
        setForm(defaultForm)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formField)
        resetForm()
        Logout()
        Login()
        navigate('/')
        
    };


  const handleShowpassword1 = () => {
    setshow1(!show1)
  };

  const handleShowpassword2 = () => {
    setshow2(!show2)
  };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...formField, [name] : value})
    }

    return(
        <div className="form-container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <input type="tex" placeholder="Fullname" name="fullname"  value={fullname} onChange={handleChange} required/>
                <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange} required />
                <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
                <input type="number" placeholder="Phone" name="number" value={number} onChange={handleChange} required />
                <div className="pass">
                <input  type={show1 ? "text"  : "password"} name="password" placeholder="Password" value={password} onChange={handleChange}  />
                    <span onClick={handleShowpassword1}>{ show1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                    <div className="confirm-pass">
                <input type={show2 ? "text" : "password"}  name="confirmpassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange} />
                <span onClick={handleShowpassword2}>{ show2 ? <i className="fa-solid fa-eye-slash"></i>  : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                <button>SEND</button>
                <p onClick={() => navigate('/')} className="handle-button">Member already? Login</p>
            </form>
        </div>
    )
}

export default SignUp