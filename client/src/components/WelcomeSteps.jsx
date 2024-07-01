import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


const WelcomeSteps = () => {

    const {setupComplete} = useContext(UserContext)

    return ( 
        <div>
            <h2>Welcome to the Adventure!</h2>
            <p>Follow these steps to begin your journey:</p>
            <ol>
                <li>Explore the world: Roam the lands, discover new areas, and find hidden treasures.</li>
                <li>Earn creatures love: Use food items to earn the trust and affection of wild creatures.</li>
                <li>Weaken creatures: Engage in battles or challenges to weaken creatures and make them more receptive to food.</li>
                <li>Train your creatures: Strengthen your bond and improve creatures abilities through caring and nurturing.</li>
                <li>Test your strength: Challenge other trainers to battles and see how your creatures fare in combat.</li>
            </ol>
            <button onClick={setupComplete}>Begin Journey</button>
        </div>
     );
}
 
export default WelcomeSteps;
