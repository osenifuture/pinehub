import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css"

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
    const [error, setError] = useState(false);

    const resetForm = () => {
        setForm(defaultForm)
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(password.length === 0) {
            setError('Pls enter Password');
        } else if(password.length < 6) {
            setError('Password must be at least  six characters');
        } else if(confirmPassword.length === 0) {
            setError('Pls confirm password');
        } else if(password !== confirmPassword) {
            setError('Wrong psaaword')
        } else {
            console.log(formField)
            resetForm()
            Logout()
            Login()
            navigate('/Login')
        }     
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

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])

    return(
        <div className="form-container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <input type="tex" placeholder="Fullname" name="fullname"  value={fullname} onChange={handleChange} required data-aos="fade-down"/>
                <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange} required data-aos="fade-up" />
                <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required  data-aos="fade-down"/>
                <input type="number" placeholder="Phone" name="number" value={number} onChange={handleChange} required data-aos="fade-up" />
                <div data-aos="fade-down" className="pass">
                <input  type={show1 ? "text"  : "password"} name="password" placeholder="Password" value={password} onChange={handleChange}  />
                    <span onClick={handleShowpassword1}>{ show1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                    <div data-aos="fade-up" className="confirm-pass">
                <input type={show2 ? "text" : "password"}  name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange} />
                <span onClick={handleShowpassword2}>{ show2 ? <i className="fa-solid fa-eye-slash"></i>  : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                <button>SEND</button>
                <p onClick={() => navigate('/Login')} className="handle-button">Member already? Login</p>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    )
}

export default SignUp