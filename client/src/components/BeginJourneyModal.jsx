import { useModal } from "../hooks/modalHook";
import CreateTrainerForm from "./CreateTrainerForm";
import '../css/setup-steps.css'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import WelcomeSteps from "./WelcomeSteps";



const BeginJourneyModal = () => {

    const { getTrainer, trainer } = useContext(UserContext)

    
    const { modalStyles, overlayStyles, modalOn } = useModal()
    
    const [modalStep, setModalStep] = useState(1)
    
    const handleModalStep = (num) => setModalStep(prev => prev + num)
    
    useEffect(() => {
        getTrainer()
        if(!trainer){
            modalOn()
        }
        if(trainer){
            setModalStep(2)
        }
    }, [])
    
    
    return (
        <div>
            <div style={overlayStyles}></div>
            <div style={modalStyles}>
                <>
                    {modalStep === 1 && <CreateTrainerForm handleModalStep={handleModalStep} />}
                    {modalStep === 2 && <WelcomeSteps />}
                </>
            </div>
        </div>
    );
}

export default BeginJourneyModal;