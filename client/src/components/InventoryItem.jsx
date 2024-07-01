


const InventoryItem = ({itemName, description, count}) => {
    return ( 
        <div className="inventory-item">
            <h2>{itemName}</h2>
            <p>{description}</p>
            <h3>x{count}</h3>
        </div>
     );
}
 
export default InventoryItem;