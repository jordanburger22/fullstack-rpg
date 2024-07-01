import { useContext, useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";
import '../css/auth.css'


const Auth = ({ modalStyles, overlayStyles, toggleModal, modalOff }) => {

    const { login, signup, resetAuthErr, token } = useContext(UserContext)

    const [isLogin, setIsLogin] = useState(false)

    const toggleForm = () => {
        resetAuthErr()
        setIsLogin(!isLogin)
    }
    useEffect(() => {
        if(token){
            modalOff()
        }
    })

    return (
        <>
            <div style={overlayStyles} onClick={toggleModal}></div>
            <div style={modalStyles}>
                <div className="auth">
                    <h1>RPG</h1>
                    {
                        isLogin ?
                            <AuthForm
                                btnText='Login'
                                submit={login}
                                toggleModal = {toggleModal}
                            />
                            :
                            <AuthForm
                                btnText='Signup'
                                submit={signup}
                                toggleModal = {toggleModal}
                            />
                    }
                    <button onClick={toggleForm}>{isLogin ? 'Need to Sign Up?' : 'Need to Login?'}</button>
                </div>
            </div>
        </>
    );
}

export default Auth;