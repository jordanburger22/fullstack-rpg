import { createContext } from "react";
import { useAuth } from "../hooks/authHooks";
import { useTrainer } from "../hooks/trainerHooks";
import { useCreatures } from "../hooks/creatureHooks";



export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const authAPI = useAuth()

    const trainerAPI = useTrainer()

    const creatureAPI = useCreatures()

    return (
        <UserContext.Provider value={{...authAPI, ...trainerAPI, ...creatureAPI}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;