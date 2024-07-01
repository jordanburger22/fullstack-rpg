import { useState } from "react"



export const useForm = (initState) => {

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

    return {
        formData,
        handleChange
    }

}

