import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css"

const defaultForm = {
    email: "",
    password: "",
    confirmpassword: ""
}

const LogIn = () => {
    const [formField, setForm] = useState(defaultForm);
    const { email, password, confirmpassword} = formField;
    const naviagte = useNavigate()
    const {Login}  = useContext(AuthContext);
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)

    const resetForm = () => {
        setForm(defaultForm)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formField)
        resetForm()
        Login()
        naviagte('/')
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
    };

    const handleNav = () => {
        naviagte('/SignUp')
    }

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    return(
        <div className="form-container">
        <h1>SIGN IN</h1>
        <form onSubmit={handleSubmit}>
            <p>Welcome Back!</p>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required  data-aos="fade-down"/>
            <div className="pass" data-aos="fade-up">
                <input  type={show1 ? "text"  : "password"} name="password" placeholder="Password" value={password} onChange={handleChange}  />
                    <span onClick={handleShowpassword1}>{ show1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
                    <div className="confirm-pass" data-aos="fade-down">
                <input type={show2 ? "text" : "password"}  name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={handleChange}  />
                <span onClick={handleShowpassword2}>{ show2 ? <i className="fa-solid fa-eye-slash"></i>  : <i className="fa-solid fa-eye"></i> }</span>
                    </div>
            <button data-aos="fade-down">Login</button>
            <p onClick={handleNav} className="handle-button">Not Register yet? Sign up </p>
        </form>
    </div>
    );
};

export default LogIn;