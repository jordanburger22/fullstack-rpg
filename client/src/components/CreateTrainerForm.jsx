import { useContext } from "react";
import { useForm } from "../hooks/FormHook";
import { UserContext } from "../context/UserProvider";


const CreateTrainerForm = ({handleModalStep}) => {

    const { formData, handleChange } = useForm({ username: "" })

    const {createTrainer, trainer} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTrainer(formData)
        handleModalStep(1)
    }

    console.log(trainer)

    return (
        <form className="username-form" onSubmit={handleSubmit}>
            <p>Welcome! Prepare for an exciting journey into the world of creatures and adventures.</p>
            <label>
                What do you go by adventurer?{' '}
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <button>Next Step</button>
        </form>
    );
}

export default CreateTrainerForm;
