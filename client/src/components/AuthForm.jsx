import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";



const AuthForm = ({ btnText, submit, toggleModal }) => {

    const { errMsg, user, token } = useContext(UserContext)

    const initState = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formData)
        token && toggleModal()
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type='email'
            />

            <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
            />
            <button>{btnText}</button>
            <p>{errMsg}</p>
        </form>
    );
}

export default AuthForm;