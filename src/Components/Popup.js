import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Popup = (props) => {


    return ( 
        <div>
            <div>
                <div className="pop-top"><div><FontAwesomeIcon className= "chevron" onClick = {props.backButton}  icon={['fas', 'chevron-left']} /> <h3>{props.search}</h3></div><FontAwesomeIcon className = "icon" icon={['fas', 'shopping-bag']} /></div>
                <div className="pop-image"></div>
                <div className="pop-items">
                    <h3>jzbxj</h3>
                    <p>jbjbn</p>
                </div>
                <div className = "pop-size">
                    <p>Size</p>

                    <div className= "pop-size-buttons">
                        <button>S</button>
                        <button>L</button>
                    </div>
                </div>
                <div className = "pop-color">
                        <p>Color</p>

                        <div className= "pop-size-color">
                            <input type="checkbox" />
                        </div>
                </div>

                <div className = "pop-up-buy">
                    <button>Add to Bag</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
     );
}
 
export default Popup;