import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from './Popup';

const Search = (props) => {


    const [search, setSearch] = useState('');
    const [reveal, setReveal] = useState(true);

    

    function hideAndSeek(e){
        e.preventDefault();
        setReveal(!reveal);
        var element = document.getElementById('search-items');
        if(reveal){
           
            element.style.display = 'block';
        }

    }

    function backButton(){
        setReveal(!reveal);
        var element = document.getElementById('search-items');
        var form = document.getElementById('myform');
        if(reveal){
            element.style.display = 'block';
        } else {
            // var element = document.getElementById('search-items');
            element.style.display = 'none';
            form.reset();
        }

        
    }


    

    return ( 
        <>
        <form id="myform" className="form">
            <input type ="text" id="search" placeholder="Search For Products..." onChange={event => {setSearch(event.target.value);}} />
            <button type ="submit" onClick = {hideAndSeek}><FontAwesomeIcon className= "icon"  icon={['fas', 'search']} /></button>
        </form>

        <div className="search-box" id="search-items">
            <div className="search-header"><p><FontAwesomeIcon className= "chevron" onClick = {backButton}  icon={['fas', 'chevron-left']} /></p> <h3>{search}</h3></div>
            <div className="items-con"> 
            {props.items.filter((val) => {
            if(search === "") {
                return val;
            } else if (val.type.toLowerCase().includes(search.toLowerCase())){
                return val;
            }

            return val;
        }).map((val) => (
            
                <div className="card" key = {val.id}>
                <div className="img-con">

                </div>
                <div className="item-price" >
                    <h3>{val.Name}</h3>
                    <p> UGX {val.price}</p>
                </div>
                <div className="button-bag">
                    <button>+ Add to Bag</button>
                </div>
            </div>
            
        ))}</div></div>

        <Popup backButton = {backButton}  search = {search}/>
        </>
        );
}
 
export default Search;