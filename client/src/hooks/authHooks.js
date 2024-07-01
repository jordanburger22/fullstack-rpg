import axios from 'axios'
import { useState } from 'react'

export const useAuth = () => {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || "",
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)

    const signup = async (creds) => {
        try {
            const res = await axios.post('/auth/signup', creds)
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            console.log(res.data)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token,
                    firstLogin: res.data.firstLogin
                }
            })
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

    const login = async (creds) => {
        try {
            const res = await axios.post('/auth/login', creds)
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg
            }
        })
    }

    function resetAuthErr(){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg: ""
            }
        })
    }



    return {
        ...userState,
        signup,
        login,
        logout, 
        handleAuthErr,
        resetAuthErr
    }
}