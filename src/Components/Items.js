const Items = (props) => {

    const addToBag = () => {
        console.log("we outside")
    }


    return ( 
        <div>
            {props.items.map((item) => (
                <div>
                    <div className ="hostt" key = {item.id}>
                        <h3>{item.Name}</h3>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <button onClick={addToBag}>+Add</button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Items;