import { useState } from "react"

const defaultForm = {
    phone: '',
    address: '',
    state: '',
    zipcode: '',
    country: '',
    securityq: '',
    securitya: ''
}

const UpgradeForm = () => {
    const [formfield, setFormField] = useState(defaultForm);
    const { phone, address, state, zipcode,country,securityq, securitya} = formfield;

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
        <div className="upgradeform-container">
            <h1>Update Your Profile</h1>
            <div className="profile-image">
            <i className="fa-solid fa-user"></i>
            </div>
            <form  onSubmit={handleSubmit}>
                <input type="tel" name="phone" placeholder="Mobile Number" value={phone} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Permanent Address" value={address} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={state} onChange={handleChange} required />
                <input type="tel" name="zipcode" placeholder="Zip-Code"  value={zipcode} onChange={handleChange} required ></input>
                <input type="text" name="country" placeholder="Country"  value={country} onChange={handleChange} required ></input>
                <select name="securityq"  value={securityq} onChange={handleChange}>
                    <option value="select your question ">select your question </option>
                    <option value="what is your first name">What is your first name</option>
                    <option value="what is your favourite color">what is your favourite color</option>
                    <option value="what is your favourite food">what is your favourite food</option>
                </select>
                <select name="securitya" value={securitya} onChange={handleChange} >
                    <option value="select your answer ">select your answer</option>
                    <option value="my name is westty">my name is westty</option>
                    <option value="my favourite color is blue">my favourite color is blue</option>
                    <option value="my favourite food is rice">my favourite food is rice</option>
                </select>
                <button>Submit</button>
            </form>

        </div>
    )

};

export default UpgradeForm;