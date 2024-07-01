import { useState } from "react"
import { userAxios } from "../userAxios"



export const useTrainer = () => {

    const [trainer, setTrainer] = useState(JSON.parse(localStorage.getItem("trainer")) || null)

    const getTrainer = async() => {
        try {
            const res = await userAxios.get('/api/trainer')
            localStorage.setItem("trainer", JSON.stringify(res.data))
            setTrainer(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const createTrainer = async(username) => {
        try {
            const res = await userAxios.post('/api/trainer', username)
            localStorage.setItem("trainer", JSON.stringify(res.data))
            setTrainer(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const trainerLogout = () => {
        localStorage.removeItem('trainer')
        setTrainer(null)
    }

    const setupComplete = async() => {
        try {
            const res = await userAxios.put('/api/trainer/setup')
            localStorage.setItem("trainer", JSON.stringify(res.data))
            setTrainer(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const updatePosition = async (newPosition) => {
        try {
            const updatedTrainer = { ...trainer, currentPosition: newPosition };
            localStorage.setItem("trainer", JSON.stringify(updatedTrainer));
            setTrainer(updatedTrainer);
        } catch (err) {
            console.log(err);
        }
    };


    return {
        trainer,
        getTrainer,
        createTrainer,
        trainerLogout,
        setupComplete,
        updatePosition
    }
}