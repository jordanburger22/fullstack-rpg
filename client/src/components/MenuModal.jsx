import { useContext, useState } from "react";
import { useModal } from "../hooks/modalHook";
import { UserContext } from "../context/UserProvider";
import InventoryMenu from "./InventoryMenu";



const MenuModal = () => {

    const { toggleModal, modalStyles, overlayStyles } = useModal()
    const { logout, trainerLogout } = useContext(UserContext)

    const handleLogout = () => {
        logout()
        trainerLogout()
    }

    const [elementShown, setElementShown] = useState('menu')

    const navigateMenu = (endpoint) => setElementShown(endpoint)
    const closeMenu = () => {
        toggleModal()
        navigateMenu('menu')
    }


    return (
        <>
            <button onClick={toggleModal}>
                ≣
            </button>
            <div style={overlayStyles} onClick={closeMenu}></div>
            <div style={modalStyles}>
                {elementShown === 'menu' &&
                    <div className="menu-div">
                        <button onClick={() => navigateMenu('inventory')}>Inventory</button>
                        <button>Creatures</button>
                        <button>Save</button>
                        <button onClick={handleLogout}>Logout</button>
                        <button onClick={closeMenu}>Close</button>
                    </div>}
                {elementShown === 'inventory' && <InventoryMenu navigateMenu = {navigateMenu}/>}
            </div>
        </>
    );
}

export default MenuModal;