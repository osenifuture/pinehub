import { useState } from "react"

const defaultForm = {
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
}

const SettingForm = () => {
    const [formfield, setFormField] = useState(defaultForm);
    const {firstName, lastName, phone, message} = formfield;

    const resetForm = () => {
        setFormField(defaultForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formfield);
        resetForm();
    };

    const handleChange = (e) => {
        const {name, value} = e.target 
        setFormField({...formfield, [name] : value})
    }

    return(
        <div className="userform-container">
            <h1>Welcome Back</h1>
            <div className="user-image">
            <i className="fa-solid fa-user"></i>
            </div>
            <form  onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Mobile Number" value={phone} onChange={handleChange} required />
                <textarea  name="message" placeholder="About me"  value={message} onChange={handleChange} required ></textarea>
                <button>Submit</button>
            </form>

        </div>
    )

};

export default SettingForm;