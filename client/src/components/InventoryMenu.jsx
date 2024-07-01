import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import InventoryItem from "./InventoryItem";



const InventoryMenu = ({ navigateMenu }) => {

    const { trainer } = useContext(UserContext)

    const inventoryItems = trainer.inventory.filter(item => item.count !== 0)

    const inventoryElements = trainer.inventory.map(item => {
        return (
            <InventoryItem key={item._id} {...item} />
        )
    })

    return (
        <div className="inventory-menu">
            <div className="inventory-header">
                <h3>Inventory</h3>
                <p>{trainer.username}</p>
            </div>
            <div className="inventory-list">
                {inventoryElements}
            </div>
            <button onClick={() => navigateMenu('menu')}>Back</button>
        </div>
    );
}

export default InventoryMenu;