import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {

    return ( 
        <form>
            <input type ="search" />
            <button type ="submit"><FontAwesomeIcon className= "icon" icon={['fas', 'search']} /></button>
        </form>
        );
}
 
export default Search;