import { useState } from "react"
import Validate from "./Validation";

export default function Form(){

    const [userData, setUserData] = useState({ username: '', password: '' });
    const[errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        Validate({ ...userData, [property]: value }, setErrors, errors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input type='text' name="username" value={userData.username} onChange={handleChange}></input>
                <span>{errors.username}</span>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='text' name="password" value={userData.password} onChange={handleChange}></input>
                <span>{errors.password}</span>
            </div>
            <button type="submit">Login</button>
        </form>
    )
};