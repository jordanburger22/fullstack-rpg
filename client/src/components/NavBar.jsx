import { useContext } from 'react';
import '../css/navbar.css'
import { UserContext } from '../context/UserProvider';
import MenuModal from './MenuModal';


function Navbar({ toggleModal }) {

    const { token } = useContext(UserContext)

    return (
        <>
            <div className="navbar">
                <h1>RPG</h1>
                {
                    !token ?
                        <button onClick={toggleModal}>Login</button>
                        :
                        <MenuModal />
                }
                
            </div>
            
        </>
    );
}

export default Navbar;