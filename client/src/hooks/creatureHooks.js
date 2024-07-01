import { useState } from "react"
import { userAxios } from "../userAxios"



export const useCreatures = () => {
    const [creatures, setCreatures] = useState([])

    const getCreatures = async() => {
        try {
            const res = await userAxios.get('/api/creature')
            setCreatures(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return {
        creatures,
        getCreatures
    }
}